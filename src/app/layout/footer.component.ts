import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../data/services.data';
import { MOTION } from '../shared/motion';
import { IconComponent } from '../shared/ui/icon.component';
import { NAV, WHATSAPP } from './nav';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, IconComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <div class="top" appReveal>
        <p class="display big" data-reveal-item>¿Listo para verse<br /><em>profesional?</em></p>
        <div class="ctas" data-reveal-item>
          <a class="btn" routerLink="/contacto" appMagnetic><app-icon name="send" /> Hablemos de tu proyecto</a>
          <a class="btn btn-ghost" [href]="wa.link" target="_blank" rel="noopener"><app-icon name="whatsapp" /> {{ wa.number }}</a>
        </div>
      </div>
      <div class="grid">
        <div class="brand">
          <img src="osmaritech_logo.png" alt="Osmaritech" width="96" height="96" loading="lazy" />
          <p class="muted">Páginas web, landing pages y sistemas para que tu negocio se vea profesional y tenga herramientas reales para crecer.</p>
        </div>
        <nav aria-label="Servicios">
          <p class="mono h">Servicios</p>
          @for (s of services; track s.id) {
            <a routerLink="/servicios" [fragment]="s.id">{{ s.title }}</a>
          }
        </nav>
        <nav aria-label="Pie">
          <p class="mono h">Navegación</p>
          <a routerLink="/">Inicio</a>
          @for (item of nav; track item.path) {
            <a [routerLink]="item.path">{{ item.label }}</a>
          }
          <a routerLink="/proyectos/chubot">Caso Chubot</a>
        </nav>
      </div>
      <div class="bottom mono">
        <span>© {{ year }} Osmaritech. Todos los derechos reservados.</span>
        <span>Diseño y desarrollo web profesional · México</span>
      </div>
    </div>
    <div class="glow" aria-hidden="true"></div>
  `,
  styles: `
    :host { display: block; position: relative; overflow: hidden; border-top: 1px solid var(--line); padding: clamp(4rem, 8vw, 7rem) 0 6rem; }
    .top { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: space-between; align-items: flex-end; }
    .big { font-size: clamp(2.6rem, 7vw, 5.5rem); line-height: 0.95; margin: 0; }
    .ctas { display: flex; flex-wrap: wrap; gap: .75rem; }
    .grid { display: grid; grid-template-columns: 1.3fr 1fr 0.8fr; gap: 3rem; margin: 4.5rem 0 2.5rem; }
    .brand img { width: 5rem; height: 5rem; object-fit: contain; margin-bottom: 1rem; }
    .brand p { max-width: 24rem; font-size: .95rem; }
    nav { display: grid; align-content: start; gap: .55rem; }
    .h { color: var(--muted); font-size: .72rem; letter-spacing: .2em; text-transform: uppercase; margin-bottom: .5rem; }
    nav a { color: var(--ink-2); text-decoration: none; font-size: .92rem; transition: color .3s, transform .3s var(--ease); width: fit-content; }
    nav a:hover { color: var(--accent); transform: translateX(4px); }
    .bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem; color: var(--muted); font-size: 0.75rem; padding-top: 1.5rem; border-top: 1px solid var(--line); }
    .glow { position: absolute; inset: auto -10% -60% -10%; height: 70%; background: radial-gradient(closest-side, rgb(var(--accent-rgb) / 0.12), transparent); pointer-events: none; }
    @media (max-width: 860px) { .grid { grid-template-columns: 1fr 1fr; } .brand { grid-column: 1 / -1; } }
    @media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class FooterComponent {
  readonly services = SERVICES;
  readonly nav = NAV;
  readonly wa = WHATSAPP;
  readonly year = new Date().getFullYear();
}
