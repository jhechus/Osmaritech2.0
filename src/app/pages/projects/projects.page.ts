import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHUBOT } from '../../data/projects.data';
import { MOTION, useGsap } from '../../shared/motion';
import { NextPageComponent } from '../../shared/ui/cta-banner.component';
import { IconComponent } from '../../shared/ui/icon.component';
import { ChipComponent } from '../../shared/ui/tech-chip.component';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, IconComponent, NextPageComponent, ChipComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container page-hero">
      <p class="eyebrow" appReveal="left"><span class="idx">03</span>Proyectos</p>
      <h1 class="display" appSplitWords>Sistemas reales, <em>funcionando hoy.</em></h1>
      <p class="lead" appReveal [revealDelay]="0.3">
        No mostramos plantillas: mostramos lo que construimos y cómo le ayuda al negocio en su día a día.
      </p>
    </header>

    <section class="container">
      <article class="project card">
        <div class="p-head">
          <div class="p-title">
            <img src="chubot-icon.png" alt="" width="64" height="64" appReveal="scale" />
            <div>
              <p class="mono muted small" appReveal="left">01 · {{ p.category }} · {{ p.year }}</p>
              <h2 class="display" appSplitWords>{{ p.name }} <em>· {{ p.codename }}</em></h2>
            </div>
          </div>
          <a routerLink="/proyectos/chubot" class="btn" appMagnetic appReveal>Caso de estudio <app-icon name="arrow" [size]="16" /></a>
        </div>

        <div class="gallery">
          <figure class="browser shot-main" appReveal="clip">
            <div class="browser-bar"><i></i><i></i><i></i><span>panel · oficina</span></div>
            <img [src]="p.cover.src" [alt]="p.cover.alt" width="1689" height="1217" loading="lazy" />
          </figure>
          <figure class="browser shot-side" appParallax="-12">
            <div class="browser-bar"><i></i><i></i><i></i><span>panel · tablero</span></div>
            <img [src]="p.shots[0].src" [alt]="p.shots[0].alt" width="2160" height="1350" loading="lazy" />
          </figure>
        </div>

        <div class="psr" appReveal [revealStagger]="0.12">
          <div data-reveal-item><span class="mono tag">El problema</span><p>{{ p.problem }}</p></div>
          <div data-reveal-item><span class="mono tag">La solución</span><p>{{ p.solution }}</p></div>
          <div data-reveal-item><span class="mono tag">El resultado</span><p>{{ p.result }}</p></div>
        </div>

        <div class="foot">
          <div class="tags" appReveal [revealStagger]="0.04">
            @for (t of p.perks; track t) {
              <app-chip data-reveal-item>{{ t }}</app-chip>
            }
          </div>
          <div class="metrics">
            @for (m of p.metrics; track m.label) {
              <div><strong class="display" [appCounter]="m.value" [counterSuffix]="m.suffix ?? ''">{{ m.value }}{{ m.suffix }}</strong><span class="mono">{{ m.label }}</span></div>
            }
          </div>
        </div>
      </article>

      <a routerLink="/contacto" class="next-slot" appReveal="scale">
        <span class="mono muted">02 · próximamente</span>
        <span class="display">Tu proyecto podría ser <em>el siguiente.</em></span>
        <span class="go"><app-icon name="plus" [size]="26" /></span>
      </a>
    </section>

    <div class="container"><app-next-page title="Caso Chubot" link="/proyectos/chubot" /></div>
  `,
  styles: `
    .page-hero { padding: clamp(8rem, 16vw, 11rem) 0 clamp(3rem, 6vw, 5rem); }
    .page-hero > * { max-width: 60rem; }
    h1 { font-size: clamp(2.8rem, 7vw, 6rem); margin: 1.25rem 0 1.5rem; }

    .project { padding: clamp(1.5rem, 3.5vw, 3rem); display: grid; gap: clamp(2rem, 4vw, 3rem); }
    .p-head { display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: space-between; align-items: center; }
    .p-title { display: flex; gap: 1.25rem; align-items: center; }
    .p-title img { border-radius: 1rem; }
    .small { font-size: .75rem; margin-bottom: .4rem; }
    h2 { font-size: clamp(2.2rem, 5vw, 4rem); }

    .gallery { display: grid; grid-template-columns: 1.5fr 1fr; gap: 1.5rem; align-items: center; }
    .gallery figure { margin: 0; }
    .shot-side { transform: translateY(2rem); }

    .psr { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
    .psr > div { padding: 1.4rem; border-radius: 1rem; border: 1px solid var(--line); background: rgb(255 255 255 / .02); display: grid; gap: .6rem; align-content: start; color: var(--ink-2); font-size: .95rem; }
    .tag { font-size: .68rem; letter-spacing: .15em; text-transform: uppercase; color: var(--accent); }
    .psr > div:nth-child(2) .tag { color: var(--pink); }
    .psr > div:nth-child(3) .tag { color: var(--mint); }

    .foot { display: grid; grid-template-columns: 1.3fr 1fr; gap: 2rem; align-items: center; padding-top: 2rem; border-top: 1px solid var(--line); }
    .tags { display: flex; flex-wrap: wrap; gap: .5rem; }
    .metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
    .metrics strong { display: block; font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--accent); }
    .metrics div:nth-child(even) strong { color: var(--pink); }
    .metrics span { font-size: .64rem; color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }

    .next-slot { margin-top: 1.5rem; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: .5rem 2rem; padding: clamp(1.75rem, 4vw, 3rem);
      border: 1px dashed rgb(255 255 255 / .18); border-radius: var(--radius); text-decoration: none; color: var(--ink); transition: border-color .4s, background .4s; }
    .next-slot .mono { grid-column: 1 / -1; font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; }
    .next-slot .display { font-size: clamp(1.8rem, 4vw, 3.2rem); }
    .go { width: 4rem; aspect-ratio: 1; border-radius: 50%; display: grid; place-items: center; border: 1px solid var(--line); transition: transform .6s var(--ease), background .4s, color .4s; }
    .next-slot:hover { border-color: var(--accent); background: rgb(var(--accent-rgb) / .05); }
    .next-slot:hover .go { transform: rotate(90deg); background: var(--accent); color: var(--bg); }

    @media (max-width: 900px) {
      .gallery, .psr, .foot { grid-template-columns: 1fr; }
      .shot-side { transform: none; }
      .metrics { grid-template-columns: repeat(2, 1fr); }
    }
  `,
})
export default class ProjectsPage {
  readonly p = CHUBOT;

  constructor() {
    useGsap(({ gsap, reduced }) => {
      if (reduced) return;
      gsap.fromTo('.shot-main img', { scale: 1.15 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.gallery', start: 'top bottom', end: 'bottom center', scrub: true },
      });
    });
  }
}
