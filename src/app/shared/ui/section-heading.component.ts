import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../motion/reveal.directive';
import { SplitWordsDirective } from '../motion/split-words.directive';

/** Encabezado de sección: índice + eyebrow en mono, título con palabras que suben, lead opcional. */
@Component({
  selector: 'app-section-heading',
  imports: [RevealDirective, SplitWordsDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="eyebrow" appReveal="left"><span class="idx">{{ index() }}</span>{{ eyebrow() }}</p>
    <h2 class="display" appSplitWords><ng-content /></h2>
    @if (lead()) { <p class="lead" appReveal [revealDelay]="0.15">{{ lead() }}</p> }
  `,
  styles: `
    :host{display:block;max-width:56rem;margin-bottom:clamp(2.5rem,5vw,4rem)}
    h2{font-size:clamp(2.2rem,5.5vw,4.2rem);margin:.6rem 0 0}
    .lead{margin-top:1.25rem;max-width:40rem}
  `,
})
export class SectionHeadingComponent {
  readonly index = input('');
  readonly eyebrow = input.required<string>();
  readonly lead = input('');
}
