import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="dot" [style.background]="color()"></span><ng-content />`,
  styles: `
    :host{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .8rem;border:1px solid var(--line);border-radius:999px;
      font:500 .8rem/1 var(--font-mono);color:var(--ink-2);background:rgb(255 255 255 / .02);
      transition:border-color .3s,color .3s,transform .3s cubic-bezier(.2,.8,.2,1)}
    :host(:hover){border-color:var(--accent);color:var(--ink);transform:translateY(-2px)}
    .dot{width:.45rem;height:.45rem;border-radius:50%}
  `,
})
export class ChipComponent {
  readonly color = input('var(--accent)');
}
