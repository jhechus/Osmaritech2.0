import { Directive, input, numberAttribute } from '@angular/core';
import { useGsap } from './use-gsap';

/**
 * Parte el texto del host en palabras (<span class="w">) y:
 * - mode 'rise': las palabras suben desde una máscara al entrar en pantalla (titulares).
 * - mode 'scrub': se iluminan una a una al ritmo del scroll (párrafos destacados).
 *
 * Se parte en el navegador: el HTML prerenderizado sigue siendo texto plano para SEO
 * y lectores de pantalla (el host guarda aria-label con el texto original).
 */
@Directive({ selector: '[appSplitWords]', host: { '[attr.data-split]': "appSplitWords() || 'rise'" } })
export class SplitWordsDirective {
  readonly appSplitWords = input<'rise' | 'scrub' | ''>('rise');
  readonly splitDelay = input(0, { transform: numberAttribute });

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      if (reduced) {
        gsap.set(el, { opacity: 1 });
        return;
      }
      const original = el.innerHTML;
      const text = el.textContent?.trim() ?? '';
      el.setAttribute('aria-label', text);
      el.innerHTML = splitHtml(el);
      gsap.set(el, { opacity: 1 });
      const words = el.querySelectorAll<HTMLElement>('.w > span');

      if (this.appSplitWords() === 'scrub') {
        gsap.fromTo(words, { opacity: 0.15 }, {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
        });
      } else {
        gsap.fromTo(words, { yPercent: 110, rotate: 4 }, {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.06,
          delay: this.splitDelay(),
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      }
      return () => {
        el.innerHTML = original;
        el.removeAttribute('aria-label');
      };
    });
  }
}

/** Envuelve cada palabra de los nodos de texto, respetando hijos como <em> o <br>. */
function splitHtml(root: HTMLElement): string {
  const walk = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node.textContent ?? '')
        .split(/(\s+)/)
        .map((part) => (part.trim() ? `<span class="w" aria-hidden="true"><span>${escape(part)}</span></span>` : part))
        .join('');
    }
    if (node instanceof HTMLElement) {
      if (node.tagName === 'BR') return '<br>';
      const tag = node.tagName.toLowerCase();
      const cls = node.className ? ` class="${node.className}"` : '';
      return `<${tag}${cls}>${Array.from(node.childNodes).map(walk).join('')}</${tag}>`;
    }
    return '';
  };
  return Array.from(root.childNodes).map(walk).join('');
}

function escape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
