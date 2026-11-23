import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '../../data/process.data';
import { MOTION, useGsap } from '../../shared/motion';
import { NextPageComponent } from '../../shared/ui/cta-banner.component';
import { IconComponent } from '../../shared/ui/icon.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';

@Component({
  selector: 'app-process-page',
  imports: [IconComponent, NextPageComponent, SectionHeadingComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container page-hero">
      <p class="eyebrow" appReveal="left"><span class="idx">04</span>Proceso</p>
      <h1 class="display" appSplitWords>Siete pasos, <em>cero sorpresas.</em></h1>
      <p class="lead" appReveal [revealDelay]="0.3">
        Sin tecnicismos de tu parte. Entregamos por etapas para que revises antes de publicar, y nada sale sin tu aprobación.
      </p>
    </header>

    <section class="track-wrap">
      <div class="container head">
        <p class="mono muted hint">Desliza para recorrer el proceso →</p>
        <div class="progress" aria-hidden="true"><span></span></div>
      </div>
      <ol class="track">
        @for (s of steps; track s.number; let last = $last) {
          <li class="step card">
            <span class="big display" aria-hidden="true">{{ s.number }}</span>
            <span class="s-icon"><app-icon [name]="s.icon" [size]="26" /></span>
            <h2 class="display">{{ s.title }}</h2>
            <p class="muted">{{ s.description }}</p>
            @if (!last) { <span class="arrow" aria-hidden="true"><app-icon name="arrow" [size]="22" /></span> }
          </li>
        }
      </ol>
    </section>

    <section class="section container">
      <app-section-heading index="★" eyebrow="Lo que puedes esperar" lead="Trabajar con nosotros se siente así, de principio a fin.">
        Comunicación clara, <em>siempre.</em>
      </app-section-heading>
      <ul class="promises" appReveal [revealStagger]="0.1">
        @for (p of promises; track p.text) {
          <li data-reveal-item><span class="p-icon"><app-icon [name]="p.icon" [size]="20" /></span>{{ p.text }}</li>
        }
      </ul>
    </section>

    <div class="container"><app-next-page title="Nosotros" link="/nosotros" /></div>
  `,
  styles: `
    .page-hero { padding: clamp(8rem, 16vw, 11rem) 0 clamp(2rem, 4vw, 3rem); }
    .page-hero > * { max-width: 60rem; }
    h1 { font-size: clamp(2.8rem, 7vw, 6rem); margin: 1.25rem 0 1.5rem; }
    .lead { max-width: 40rem; }

    .track-wrap { padding: 3rem 0; overflow: hidden; }
    @media (min-width: 900px) { .track-wrap { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; } }
    .head { display: flex; align-items: center; gap: 2rem; margin-bottom: 2.5rem; }
    .hint { font-size: .75rem; white-space: nowrap; }
    .progress { flex: 1; height: 2px; background: var(--line); border-radius: 2px; overflow: hidden; }
    .progress span { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--pink)); transform-origin: left; transform: scaleX(0); }

    .track { list-style: none; margin: 0; padding: 0 max(1.25rem, calc((100vw - 78rem) / 2)); display: flex; gap: 1.5rem; width: max-content; }
    .step { width: clamp(19rem, 30vw, 25rem); min-height: 26rem; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; flex: none; }
    .big { position: absolute; right: 1.25rem; top: .5rem; font-size: 7rem; color: transparent; -webkit-text-stroke: 1px rgb(255 255 255 / .12); line-height: 1; }
    .s-icon { width: 3.5rem; aspect-ratio: 1; border-radius: 1rem; display: grid; place-items: center; background: rgb(var(--accent-rgb) / .1); color: var(--accent); }
    .step:nth-child(even) .s-icon { background: rgb(var(--pink-rgb) / .1); color: var(--pink); }
    .step h2 { font-size: 2.2rem; margin-top: auto; }
    .step p { font-size: .95rem; }
    .arrow { position: absolute; right: -1.35rem; top: 50%; z-index: 2; width: 2.7rem; aspect-ratio: 1; border-radius: 50%; display: grid; place-items: center; background: var(--bg); border: 1px solid var(--line); color: var(--accent); }
    .step { overflow: visible; }

    .promises { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); gap: 1rem; }
    .promises li { display: flex; gap: 1rem; align-items: center; padding: 1.25rem 1.4rem; border: 1px solid var(--line); border-radius: 1rem; background: rgb(255 255 255 / .02); }
    .p-icon { width: 2.6rem; aspect-ratio: 1; border-radius: .8rem; display: grid; place-items: center; background: rgb(var(--accent-rgb) / .1); color: var(--accent); flex: none; }

    @media (max-width: 899px) {
      .head { display: none; }
      .track { flex-direction: column; width: auto; padding: 0 1.25rem; }
      .step { width: auto; min-height: 0; }
      .step h2 { margin-top: .5rem; }
      .arrow { display: none; }
    }
  `,
})
export default class ProcessPage {
  readonly steps = PROCESS_STEPS;
  readonly promises = [
    { icon: 'chat', text: 'Comunicación clara durante todo el proyecto' },
    { icon: 'layers', text: 'Entregas por etapas para que puedas revisar' },
    { icon: 'check', text: 'Revisión y aprobación antes de publicar' },
    { icon: 'chart', text: 'Sitio preparado para futuras mejoras' },
    { icon: 'sparkles', text: 'Sin tecnicismos innecesarios' },
  ];

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      const mm = gsap.matchMedia();

      // Escritorio: la sección se fija y los pasos avanzan en horizontal.
      mm.add('(min-width: 900px)', () => {
        const track = el.querySelector<HTMLElement>('.track')!;
        const distance = () => track.scrollWidth - window.innerWidth;
        const move = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: { trigger: '.track-wrap', start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true },
        });
        gsap.to('.progress span', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.track-wrap', start: 'top top', end: () => `+=${distance()}`, scrub: true, invalidateOnRefresh: true },
        });
        if (!reduced) {
          gsap.utils.toArray<HTMLElement>('.step').forEach((card) => {
            gsap.from(card, {
              opacity: 0.3,
              y: 40,
              rotate: 2,
              ease: 'none',
              scrollTrigger: { trigger: card, containerAnimation: move, start: 'left 95%', end: 'left 60%', scrub: true },
            });
          });
        }
      });

      // Móvil: cada paso aparece al entrar.
      mm.add('(max-width: 899px)', () => {
        if (reduced) return;
        gsap.utils.toArray<HTMLElement>('.step').forEach((card) =>
          gsap.from(card, { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: card, start: 'top 88%', once: true } }),
        );
      });

      requestAnimationFrame(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });
      return () => mm.revert();
    });
  }
}
