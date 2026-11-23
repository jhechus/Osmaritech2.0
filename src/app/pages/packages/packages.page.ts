import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQS } from '../../data/faqs.data';
import { PACKAGES } from '../../data/packages.data';
import { MOTION } from '../../shared/motion';
import { NextPageComponent } from '../../shared/ui/cta-banner.component';
import { IconComponent } from '../../shared/ui/icon.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';

@Component({
  selector: 'app-packages-page',
  imports: [RouterLink, IconComponent, NextPageComponent, SectionHeadingComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container page-hero">
      <p class="eyebrow" appReveal="left"><span class="idx">02</span>Paquetes</p>
      <h1 class="display" appSplitWords>Opciones claras para <em>negocios reales.</em></h1>
      <p class="lead" appReveal [revealDelay]="0.3">
        Sin costos ocultos ni procesos complicados. Elige un punto de partida y lo ajustamos a lo que realmente necesita tu negocio.
      </p>
    </header>

    <section class="container packs" appReveal="up" [revealStagger]="0.12">
      @for (p of packages; track p.id; let i = $index) {
        <article class="pack card tilt" [id]="p.id" appTilt="5" data-reveal-item [class.hl]="p.highlighted" [attr.data-accent]="p.accent">
          <header>
            <span class="mono idx">{{ (i + 1).toString().padStart(2, '0') }}</span>
            @if (p.badge) { <span class="mono badge">{{ p.badge }}</span> }
          </header>
          <h2 class="display">{{ p.name }}</h2>
          <p class="tagline">{{ p.tagline }}</p>
          <p class="muted desc">{{ p.description }}</p>
          <ul>
            @for (f of p.features; track f) {
              <li><app-icon name="check" [size]="15" /> {{ f }}</li>
            }
          </ul>
          <a routerLink="/contacto" class="btn" [class.btn-ghost]="!p.highlighted" appMagnetic>{{ p.ctaText }} <app-icon name="arrow" [size]="16" /></a>
        </article>
      }
    </section>

    <section class="section container faq-wrap">
      <app-section-heading index="03" eyebrow="Preguntas frecuentes" lead="Lo que casi todos preguntan antes de empezar. Si tu duda no está aquí, escríbenos o pregúntale al asistente.">
        Antes de que <em>preguntes.</em>
      </app-section-heading>
      <div class="faqs" appReveal [revealStagger]="0.07">
        @for (f of faqs; track f.question; let i = $index) {
          <div class="faq" data-reveal-item [class.open]="open() === i">
            <button type="button" (click)="toggle(i)" [attr.aria-expanded]="open() === i" [attr.aria-controls]="'faq-' + i">
              <span>{{ f.question }}</span>
              <span class="plus"><app-icon name="plus" [size]="18" /></span>
            </button>
            <div class="ans" [id]="'faq-' + i" role="region"><div><p class="muted">{{ f.answer }}</p></div></div>
          </div>
        }
      </div>
    </section>

    <div class="container"><app-next-page title="Proyectos" link="/proyectos" /></div>
  `,
  styles: `
    .page-hero { padding: clamp(8rem, 16vw, 11rem) 0 clamp(3rem, 6vw, 5rem); }
    .page-hero > * { max-width: 60rem; }
    h1 { font-size: clamp(2.6rem, 6.5vw, 5.4rem); margin: 1.25rem 0 1.5rem; }
    .lead { max-width: 40rem; }

    .packs { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .pack { --c: var(--accent); padding: clamp(1.75rem, 3.5vw, 2.75rem); display: flex; flex-direction: column; gap: 1rem; }
    .pack[data-accent='violet'] { --c: var(--pink); }
    .pack[data-accent='mint'] { --c: var(--mint); }
    .pack::before { content: ''; position: absolute; inset: 0 0 auto; height: 3px; background: var(--c); }
    .pack.hl { border-color: rgb(var(--pink-rgb) / .5); background: linear-gradient(180deg, rgb(var(--pink-rgb) / .1), var(--bg-2) 50%); }
    .pack header { display: flex; justify-content: space-between; align-items: center; }
    .idx { color: var(--c); font-size: .8rem; }
    .badge { font-size: .66rem; text-transform: uppercase; letter-spacing: .12em; padding: .4rem .7rem; border-radius: 999px; background: var(--c); color: var(--bg); }
    h2 { font-size: clamp(2.2rem, 4vw, 3rem); }
    .tagline { font-weight: 600; }
    .desc { font-size: .95rem; }
    ul { list-style: none; margin: .5rem 0 1rem; padding: 1.25rem 0 0; border-top: 1px solid var(--line); display: grid; gap: .55rem; font-size: .92rem; color: var(--ink-2); }
    li { display: flex; gap: .55rem; align-items: flex-start; }
    li app-icon { color: var(--c); margin-top: .2rem; }
    .pack .btn { margin-top: auto; align-self: flex-start; }

    .faqs { border-top: 1px solid var(--line); max-width: 56rem; }
    .faq { border-bottom: 1px solid var(--line); }
    .faq button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; padding: 1.4rem 0; background: none; border: 0; color: var(--ink); text-align: left; cursor: pointer; font-size: clamp(1.05rem, 2vw, 1.3rem); }
    .faq button:hover { color: var(--accent); }
    .plus { width: 2.4rem; aspect-ratio: 1; flex-shrink: 0; border-radius: 50%; border: 1px solid var(--line); display: grid; place-items: center; transition: transform .5s var(--ease), background .3s, color .3s; }
    .faq.open .plus { transform: rotate(135deg); background: var(--accent); color: var(--bg); border-color: var(--accent); }
    .ans { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .5s var(--ease); }
    .ans > div { overflow: hidden; }
    .ans p { padding: 0 3.5rem 1.5rem 0; }
    .faq.open .ans { grid-template-rows: 1fr; }

    @media (max-width: 860px) { .packs { grid-template-columns: 1fr; } }
  `,
})
export default class PackagesPage {
  readonly packages = PACKAGES;
  readonly faqs = FAQS;
  readonly open = signal<number | null>(0);

  toggle(i: number): void {
    this.open.update((v) => (v === i ? null : i));
  }
}
