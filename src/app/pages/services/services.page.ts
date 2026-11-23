import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/services.data';
import { MOTION, useGsap } from '../../shared/motion';
import { NextPageComponent } from '../../shared/ui/cta-banner.component';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink, IconComponent, NextPageComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container page-hero">
      <p class="eyebrow" appReveal="left"><span class="idx">01</span>Servicios</p>
      <h1 class="display" appSplitWords>Soluciones digitales para que tu negocio <em>se vea y funcione mejor.</em></h1>
      <p class="lead" appReveal [revealDelay]="0.3">
        Diez servicios, una misma idea: que tu cliente entienda rápido quién eres, qué ofreces y cómo contactarte.
      </p>
    </header>

    <section class="container layout">
      <aside class="side">
        <p class="mono side-h">Índice</p>
        <ol>
          @for (s of services; track s.id; let i = $index) {
            <li>
              <a [routerLink]="[]" [fragment]="s.id" [class.on]="active() === i">
                <span class="mono">{{ pad(i) }}</span>{{ s.title }}
              </a>
            </li>
          }
        </ol>
      </aside>

      <div class="list">
        @for (s of services; track s.id; let i = $index) {
          <article class="svc card" [id]="s.id" [attr.data-i]="i" appReveal>
            <header>
              <span class="s-icon" [class.pink]="i % 2"><app-icon [name]="s.icon" [size]="26" /></span>
              <span class="mono num">{{ pad(i) }} / {{ pad(services.length - 1) }}</span>
            </header>
            <h2 class="display">{{ s.title }}</h2>
            <p class="sub">{{ s.subtitle }}</p>
            <p class="muted">{{ s.description }}</p>
            <div class="pb">
              <div><span class="mono tag bad"><app-icon name="help" [size]="13" /> El problema</span><p>{{ s.problem }}</p></div>
              <div><span class="mono tag good"><app-icon name="check" [size]="13" /> El beneficio</span><p>{{ s.benefit }}</p></div>
            </div>
            <ul class="feats" appReveal [revealStagger]="0.05">
              @for (f of s.features; track f) {
                <li data-reveal-item><app-icon name="check" [size]="15" /> {{ f }}</li>
              }
            </ul>
            <a routerLink="/contacto" class="btn btn-small btn-ghost">Me interesa <app-icon name="arrow" [size]="14" /></a>
          </article>
        }
      </div>
    </section>

    <div class="container"><app-next-page title="Paquetes" link="/paquetes" /></div>
  `,
  styles: `
    .page-hero { padding: clamp(8rem, 16vw, 11rem) 0 clamp(3rem, 6vw, 5rem); }
    .page-hero > * { max-width: 62rem; }
    h1 { font-size: clamp(2.6rem, 6.5vw, 5.4rem); margin: 1.25rem 0 1.5rem; }
    .lead { max-width: 40rem; }

    .layout { display: grid; grid-template-columns: 18rem 1fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; padding-bottom: 4rem; }
    .side { position: sticky; top: 6.5rem; }
    .side-h { font-size: .72rem; letter-spacing: .2em; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; }
    .side ol { list-style: none; margin: 0; padding: 0; display: grid; gap: .15rem; border-left: 1px solid var(--line); }
    .side a { display: flex; gap: .75rem; padding: .5rem 1rem; text-decoration: none; color: var(--muted); font-size: .88rem; line-height: 1.3;
      border-left: 2px solid transparent; margin-left: -1px; transition: color .3s, border-color .3s, transform .4s var(--ease); }
    .side a span { font-size: .7rem; padding-top: .15rem; }
    .side a:hover { color: var(--ink); }
    .side a.on { color: var(--ink); border-color: var(--accent); transform: translateX(4px); }
    .side a.on span { color: var(--accent); }

    .list { display: grid; gap: 1.5rem; }
    .svc { padding: clamp(1.5rem, 3.5vw, 2.75rem); display: grid; gap: 1rem; scroll-margin-top: 6.5rem; }
    .svc header { display: flex; justify-content: space-between; align-items: center; }
    .s-icon { width: 3.5rem; aspect-ratio: 1; border-radius: 1rem; display: grid; place-items: center; background: rgb(var(--accent-rgb) / .1); color: var(--accent); }
    .s-icon.pink { background: rgb(var(--pink-rgb) / .1); color: var(--pink); }
    .num { font-size: .75rem; color: var(--muted); }
    h2 { font-size: clamp(2rem, 4vw, 3rem); }
    .sub { color: var(--ink); font-weight: 600; }
    .pb { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: .5rem; }
    .pb > div { padding: 1.1rem 1.2rem; border-radius: 1rem; background: rgb(255 255 255 / .02); border: 1px solid var(--line); display: grid; gap: .5rem; font-size: .93rem; color: var(--ink-2); }
    .tag { display: inline-flex; align-items: center; gap: .4rem; font-size: .68rem; text-transform: uppercase; letter-spacing: .12em; }
    .tag.bad { color: var(--amber); }
    .tag.good { color: var(--mint); }
    .feats { list-style: none; margin: .5rem 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: .55rem 1.5rem; font-size: .92rem; color: var(--ink-2); }
    .feats li { display: flex; gap: .55rem; align-items: flex-start; }
    .feats app-icon { color: var(--accent); margin-top: .2rem; }
    .svc .btn { justify-self: start; margin-top: .5rem; }

    @media (max-width: 900px) {
      .layout { grid-template-columns: 1fr; }
      .side { display: none; }
      .pb, .feats { grid-template-columns: 1fr; }
    }
  `,
})
export default class ServicesPage {
  readonly services = SERVICES;
  readonly active = signal(0);
  readonly pad = (n: number) => (n + 1).toString().padStart(2, '0');

  constructor() {
    useGsap(({ gsap }) => {
      // Resalta en el índice el servicio que está en el centro de la pantalla.
      gsap.utils.toArray<HTMLElement>('.svc').forEach((card, i) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 55%',
            end: 'bottom 55%',
            onToggle: (self) => self.isActive && this.active.set(i),
          },
        });
      });
    });
  }
}
