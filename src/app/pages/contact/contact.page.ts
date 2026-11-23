import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WHATSAPP } from '../../layout/nav';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { MOTION } from '../../shared/motion';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-contact-page',
  imports: [IconComponent, ContactFormComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container page-hero">
      <p class="eyebrow" appReveal="left"><span class="idx">06</span>Contacto</p>
      <h1 class="display" appSplitWords>Hablemos de <em>tu proyecto.</em></h1>
      <p class="lead" appReveal [revealDelay]="0.3">
        ¿Tienes una idea o quieres mejorar la presencia digital de tu negocio? Cuéntanos qué necesitas y te ayudamos a convertirlo en una página, landing o sistema funcional.
      </p>
    </header>

    <section class="container layout">
      <aside class="side">
        <a class="channel card tilt" [href]="wa.link" target="_blank" rel="noopener" appTilt="6" appReveal="left">
          <span class="c-icon"><app-icon name="whatsapp" [size]="26" /></span>
          <span>
            <small class="mono">WhatsApp · respuesta más rápida</small>
            <strong class="display">{{ wa.number }}</strong>
          </span>
          <app-icon name="external" [size]="20" class="ext" />
        </a>

        <div class="promises card" appReveal [revealStagger]="0.08">
          <p class="mono h">Cuando nos escribas</p>
          @for (p of promises; track p) {
            <p class="promise" data-reveal-item><app-icon name="check" [size]="16" /> {{ p }}</p>
          }
        </div>

        <div class="tags" appReveal [revealStagger]="0.04">
          @for (t of tags; track t) {
            <span class="mono tag" data-reveal-item>{{ t }}</span>
          }
        </div>
      </aside>

      <div class="form card" appReveal="right">
        <h2 class="display">Cuéntanos sobre tu proyecto</h2>
        <p class="muted sub">Completa el formulario o escríbenos directo por WhatsApp. Cualquiera de las dos funciona.</p>
        <app-contact-form />
      </div>
    </section>

    <section class="section container closing">
      <p class="display" appSplitWords="scrub">Si un cliente te busca en internet, tu página debe hablar bien de ti antes de que te escriba.</p>
    </section>
  `,
  styles: `
    .page-hero { padding: clamp(8rem, 16vw, 11rem) 0 clamp(2.5rem, 5vw, 4rem); }
    .page-hero > * { max-width: 60rem; }
    h1 { font-size: clamp(2.8rem, 7vw, 6rem); margin: 1.25rem 0 1.5rem; }
    .lead { max-width: 40rem; }

    .layout { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 1.5rem; align-items: start; }
    .side { display: grid; gap: 1.25rem; position: sticky; top: 6.5rem; }

    .channel { display: grid; grid-template-columns: auto 1fr auto; gap: 1.1rem; align-items: center; padding: 1.5rem; text-decoration: none; color: var(--ink);
      border-color: rgb(37 211 102 / .35); background: linear-gradient(120deg, rgb(37 211 102 / .12), var(--bg-2)); }
    .c-icon { width: 3.4rem; aspect-ratio: 1; border-radius: 1rem; display: grid; place-items: center; background: #25d366; color: #04210f; }
    .channel small { display: block; font-size: .68rem; color: var(--ink-2); letter-spacing: .08em; text-transform: uppercase; margin-bottom: .35rem; }
    .channel strong { font-size: 2rem; font-weight: 400; }
    .ext { color: var(--muted); transition: transform .4s var(--ease), color .3s; }
    .channel:hover .ext { transform: translate(3px, -3px); color: #25d366; }

    .promises { padding: 1.5rem; display: grid; gap: .75rem; }
    .h { font-size: .7rem; letter-spacing: .2em; text-transform: uppercase; color: var(--muted); }
    .promise { display: flex; gap: .6rem; align-items: center; color: var(--ink-2); font-size: .95rem; }
    .promise app-icon { color: var(--accent); }

    .tags { display: flex; flex-wrap: wrap; gap: .5rem; }
    .tag { font-size: .75rem; padding: .45rem .8rem; border-radius: 999px; border: 1px solid var(--line); color: var(--ink-2); }

    .form { padding: clamp(1.5rem, 4vw, 2.75rem); }
    .form h2 { font-size: clamp(2rem, 3.6vw, 2.8rem); }
    .sub { margin: .75rem 0 2rem; }

    .closing .display { font-size: clamp(2rem, 4.5vw, 3.8rem); line-height: 1.1; max-width: 60rem; }

    @media (max-width: 900px) {
      .layout { grid-template-columns: 1fr; }
      .side { position: static; }
    }
  `,
})
export default class ContactPage {
  readonly wa = WHATSAPP;
  readonly promises = [
    'Respondemos en menos de 24 horas',
    'Sin presión ni ventas agresivas',
    'Si no tienes claro qué necesitas, te orientamos',
    'Primera consulta sin costo',
  ];
  readonly tags = ['Diseño web', 'Landing pages', 'Sistemas web', 'Mantenimiento', 'SEO técnico', 'Hosting & SSL', 'Automatización'];
}
