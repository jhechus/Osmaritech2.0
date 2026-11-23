import { Directive, input, numberAttribute } from '@angular/core';
import { useGsap } from './use-gsap';

export type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'clip' | 'blur';

const FROM: Record<RevealVariant, gsap.TweenVars> = {
  up: { y: 48 },
  left: { x: -60 },
  right: { x: 60 },
  scale: { scale: 0.92, y: 24 },
  clip: { clipPath: 'inset(0 0 100% 0)', y: 20 },
  blur: { filter: 'blur(12px)', y: 16 },
};

/**
 * Aparición al entrar en viewport.
 * - Sin hijos marcados: anima el host.
 * - Con hijos `[data-reveal-item]`: los anima en cascada (stagger).
 *
 * El estado inicial (opacity 0) lo pone el CSS global con `html.motion [data-reveal]`,
 * así el HTML prerenderizado no parpadea antes de que cargue GSAP.
 */
@Directive({
  selector: '[appReveal]',
  host: { 'data-reveal': '' },
})
export class RevealDirective {
  readonly appReveal = input<RevealVariant | ''>('up');
  readonly revealDelay = input(0, { transform: numberAttribute });
  readonly revealStagger = input(0.09, { transform: numberAttribute });
  readonly revealStart = input('top 85%');

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      const items = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('[data-reveal-item]'));
      const targets = items.length ? items : [el];
      if (items.length) gsap.set(el, { opacity: 1 });

      if (reduced) {
        gsap.set(targets, { opacity: 1 });
        return;
      }

      const variant = (this.appReveal() || 'up') as RevealVariant;
      const to: gsap.TweenVars = { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.9, delay: this.revealDelay(), stagger: this.revealStagger() };
      if (variant === 'clip') to['clipPath'] = 'inset(0 0 0% 0)';
      if (variant === 'blur') to['filter'] = 'blur(0px)';

      gsap.fromTo(targets, { opacity: 0, ...FROM[variant] }, {
        ...to,
        clearProps: 'transform,filter,clipPath',
        scrollTrigger: { trigger: el, start: this.revealStart(), once: true },
      });
    });
  }
}
