import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOTION } from '../motion';
import { IconComponent } from './icon.component';

/** Bloque de cierre que enlaza a la siguiente página: así el sitio se recorre como un CV, no como un landing. */
@Component({
  selector: 'app-next-page',
  imports: [RouterLink, IconComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="next" [routerLink]="link()" appReveal="clip">
      <span class="label mono">Siguiente</span>
      <span class="title display">{{ title() }}</span>
      <span class="circle" appMagnetic="0.4"><app-icon name="arrow" [size]="28" /></span>
    </a>
  `,
  styles: `
    .next{display:grid;grid-template-columns:1fr auto;align-items:center;gap:.5rem 2rem;padding:clamp(2rem,5vw,4rem) 0;
      border-top:1px solid var(--line);text-decoration:none;color:var(--ink)}
    .label{grid-column:1/-1;color:var(--muted);font-size:.8rem;letter-spacing:.2em;text-transform:uppercase}
    .title{font-size:clamp(2.4rem,8vw,6.5rem);line-height:.95;transition:color .4s,transform .6s cubic-bezier(.2,.8,.2,1)}
    .circle{width:clamp(4rem,9vw,6.5rem);aspect-ratio:1;border-radius:50%;display:grid;place-items:center;
      border:1px solid var(--line);transition:background .4s,color .4s,border-color .4s}
    .next:hover .title{color:var(--accent);transform:translateX(.5rem)}
    .next:hover .circle{background:var(--accent);color:var(--bg);border-color:var(--accent)}
  `,
})
export class NextPageComponent {
  readonly title = input.required<string>();
  readonly link = input.required<string>();
}
