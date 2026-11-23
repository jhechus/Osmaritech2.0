import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOTION, useGsap } from '../../shared/motion';
import { NextPageComponent } from '../../shared/ui/cta-banner.component';
import { IconComponent } from '../../shared/ui/icon.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, IconComponent, SectionHeadingComponent, NextPageComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="page-hero container">
      <p class="eyebrow" appReveal="left"><span class="idx">05</span>Sobre Osmaritech</p>
      <h1 class="display" appSplitWords>Una marca creada para <em>negocios reales.</em></h1>
    </header>

    <section class="container intro">
      <figure class="logo-stage" appReveal="scale">
        <div class="rings" aria-hidden="true"><span></span><span></span><span></span></div>
        <img src="osmaritech_logo.png" alt="Logotipo de Osmaritech" width="500" height="500" appParallax="-10" />
        <figcaption class="mono"><app-icon name="pin" [size]="14" /> México · Desarrollo web para negocios</figcaption>
      </figure>
      <div class="story">
        <p class="display quote" appSplitWords="scrub">
          Nació de observar un problema común: negocios con buenos servicios, pero una presencia digital que no los representa.
        </p>
        <p class="lead" appReveal>
          Osmaritech ayuda a negocios, profesionistas y emprendedores a tener una presencia digital más profesional sin complicarles el proceso.
        </p>
        <p class="lead" appReveal>
          Creamos páginas web, landing pages y sistemas que se entienden, se ven bien y cumplen una función real: explicar mejor lo que haces, generar confianza y facilitar que tus clientes te contacten.
        </p>
        <blockquote class="card" appReveal="left">
          <span class="display mark">“</span>
          <p class="display">Tu negocio puede verse tan profesional como el servicio que ya ofreces.</p>
        </blockquote>
      </div>
    </section>

    <section class="section container">
      <app-section-heading index="A" eyebrow="Valores" lead="No son frases de relleno: son los criterios que aplicamos en cada proyecto.">
        Lo que guía cómo <em>trabajamos.</em>
      </app-section-heading>
      <div class="values" appReveal="scale" [revealStagger]="0.1">
        @for (v of values; track v.title; let i = $index) {
          <article class="card value tilt" appTilt data-reveal-item>
            <span class="v-icon"><app-icon [name]="v.icon" [size]="24" /></span>
            <h3 class="display">{{ v.title }}</h3>
            <p class="muted">{{ v.desc }}</p>
            <span class="v-num display">{{ i + 1 }}</span>
          </article>
        }
      </div>
    </section>

    <section class="section container focus">
      <div>
        <app-section-heading index="B" eyebrow="Especialización" lead="Nos enfocamos en desarrollo web, sistemas digitales y mantenimiento técnico. Hacemos lo que sabemos hacer bien.">
          En qué nos <em>especializamos.</em>
        </app-section-heading>
        <p class="note card" appReveal>
          <app-icon name="help" [size]="18" />
          <span>Actualmente <strong>no ofrecemos</strong> campañas publicitarias, manejo de redes sociales ni marketing digital. Nos especializamos en la parte técnica y de desarrollo.</span>
        </p>
      </div>
      <ul class="focus-list" appReveal="right" [revealStagger]="0.06">
        @for (f of focuses; track f) {
          <li data-reveal-item><span class="dot"></span>{{ f }}</li>
        }
      </ul>
    </section>

    <section class="container lab card" appReveal="clip">
      <img src="chubot-icon.png" alt="" width="72" height="72" />
      <div>
        <p class="mono muted small">Laboratorio interno</p>
        <p class="display lab-t">Usamos lo que construimos: <em>Chubot</em> organiza el trabajo de Osmaritech todos los días.</p>
      </div>
      <a routerLink="/proyectos/chubot" class="btn btn-ghost">Ver cómo <app-icon name="arrow" [size]="16" /></a>
    </section>

    <div class="container"><app-next-page title="Contacto" link="/contacto" /></div>
  `,
  styles: `
    .page-hero { padding: clamp(8rem, 16vw, 11rem) 0 clamp(2.5rem, 5vw, 4rem); }
    .page-hero > * { max-width: 60rem; }
    h1 { font-size: clamp(2.8rem, 7vw, 6rem); margin-top: 1.25rem; }

    .intro { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(2rem, 6vw, 5rem); align-items: start; }
    .logo-stage { position: sticky; top: 7rem; margin: 0; aspect-ratio: 1; display: grid; place-items: center; border-radius: 2rem; border: 1px solid var(--line);
      background: radial-gradient(circle at 50% 45%, rgb(var(--accent-rgb) / .14), transparent 60%), var(--bg-2); overflow: hidden; }
    .logo-stage img { width: 62%; height: auto; position: relative; z-index: 1; filter: drop-shadow(0 20px 40px rgb(0 0 0 / .5)); }
    .logo-stage figcaption { position: absolute; bottom: 1.25rem; left: 1.25rem; display: flex; gap: .4rem; align-items: center; color: var(--ink-2); font-size: .72rem; }
    .rings { position: absolute; inset: 0; }
    .rings span { position: absolute; inset: 50% auto auto 50%; border: 1px dashed rgb(var(--accent-rgb) / .25); border-radius: 50%; translate: -50% -50%; animation: spin 40s linear infinite; }
    .rings span:nth-child(1) { width: 72%; aspect-ratio: 1; }
    .rings span:nth-child(2) { width: 88%; aspect-ratio: 1; border-color: rgb(var(--pink-rgb) / .22); animation-direction: reverse; animation-duration: 60s; }
    .rings span:nth-child(3) { width: 104%; aspect-ratio: 1; }
    @keyframes spin { to { rotate: 360deg; } }

    .story { display: grid; gap: 1.5rem; }
    .quote { font-size: clamp(1.8rem, 3.4vw, 2.9rem); line-height: 1.15; }
    blockquote { margin: 1rem 0 0; padding: 2rem 2rem 2rem 4.5rem; }
    blockquote .mark { position: absolute; left: 1.25rem; top: .5rem; font-size: 5rem; color: var(--pink); line-height: 1; }
    blockquote p { font-size: clamp(1.5rem, 2.6vw, 2.1rem); line-height: 1.15; font-style: italic; }

    .values { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
    .value { padding: 2rem; display: flex; flex-direction: column; gap: .9rem; min-height: 16rem; }
    .v-icon { width: 3.2rem; aspect-ratio: 1; border-radius: 1rem; display: grid; place-items: center; background: rgb(var(--accent-rgb) / .1); color: var(--accent); }
    .value:nth-child(even) .v-icon { background: rgb(var(--pink-rgb) / .1); color: var(--pink); }
    .value h3 { font-size: 1.9rem; margin-top: auto; }
    .value p { font-size: .93rem; }
    .v-num { position: absolute; right: 1.25rem; top: .25rem; font-size: 5.5rem; color: transparent; -webkit-text-stroke: 1px rgb(255 255 255 / .1); }

    .focus { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 6vw, 5rem); align-items: start; }
    .note { display: flex; gap: .9rem; padding: 1.25rem 1.4rem; color: var(--ink-2); font-size: .93rem; }
    .note app-icon { color: var(--amber); margin-top: .15rem; flex: none; }
    .note strong { color: var(--ink); }
    .focus-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line); }
    .focus-list li { display: flex; align-items: center; gap: 1rem; padding: 1.05rem .25rem; border-bottom: 1px solid var(--line); font-size: 1.05rem; transition: padding .4s var(--ease), color .3s; }
    .focus-list li:hover { padding-left: 1rem; color: var(--accent); }
    .dot { width: .5rem; height: .5rem; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--pink)); flex: none; }

    .lab { display: grid; grid-template-columns: auto 1fr auto; gap: 1.75rem; align-items: center; padding: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: 2rem;
      background: linear-gradient(120deg, rgb(var(--accent-rgb) / .1), rgb(var(--pink-rgb) / .08)); }
    .lab img { border-radius: 1rem; }
    .small { font-size: .72rem; letter-spacing: .15em; text-transform: uppercase; margin-bottom: .4rem; }
    .lab-t { font-size: clamp(1.5rem, 2.8vw, 2.3rem); line-height: 1.1; }

    @media (max-width: 900px) {
      .intro, .focus { grid-template-columns: 1fr; }
      .logo-stage { position: relative; top: 0; max-width: 26rem; }
      .values { grid-template-columns: 1fr 1fr; }
      .lab { grid-template-columns: 1fr; justify-items: start; }
    }
    @media (max-width: 560px) { .values { grid-template-columns: 1fr; } }
  `,
})
export default class AboutPage {
  readonly values = [
    { icon: 'search', title: 'Claridad', desc: 'Preferimos comunicar bien a impresionar con tecnicismos. Tu negocio necesita respuestas claras, no vocabulario técnico.' },
    { icon: 'palette', title: 'Diseño con intención', desc: 'Cada elemento visual tiene un propósito: generar confianza, explicar mejor o facilitar el contacto con tus clientes.' },
    { icon: 'code', title: 'Tecnología útil', desc: 'No construimos cosas complicadas por el gusto de hacerlas. La tecnología es un medio, no un fin.' },
    { icon: 'chat', title: 'Comunicación honesta', desc: 'Te decimos lo que funciona y lo que no, aunque no sea lo que querías escuchar.' },
    { icon: 'chart', title: 'Resultados reales', desc: 'El éxito no es una página bonita: es que esa página ayude a tu negocio a generar más confianza y contactos.' },
    { icon: 'refresh', title: 'Soluciones pensadas', desc: 'Cada negocio es diferente. No aplicamos la misma plantilla a todos: entendemos tu caso y proponemos lo que tiene sentido.' },
  ];

  readonly focuses = [
    'Diseño y desarrollo web profesional',
    'Landing pages de venta',
    'Páginas web para negocios y profesionistas',
    'Rediseño de sitios existentes',
    'Sistemas web personalizados',
    'Automatización de procesos internos',
    'Mantenimiento técnico web',
    'SEO básico y técnico',
    'Hosting, dominio y SSL',
  ];

  constructor() {
    useGsap(({ gsap, reduced }) => {
      if (reduced) return;
      // Los anillos del logo giran un poco más rápido mientras haces scroll.
      gsap.to('.rings', {
        rotate: 90,
        ease: 'none',
        scrollTrigger: { trigger: '.intro', start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });
  }
}
