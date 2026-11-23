import { ChangeDetectionStrategy, Component } from '@angular/core';
import { useGsap } from '../shared/motion/use-gsap';

/** Barra superior que se llena con el scroll de la página. */
@Component({
  selector: 'app-scroll-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="fill"></span>`,
  styles: `
    :host { position: fixed; inset: 0 0 auto; height: 3px; z-index: 60; pointer-events: none; }
    .fill { display: block; height: 100%; background: linear-gradient(90deg, var(--cyan), var(--accent)); transform-origin: left; transform: scaleX(0); }
  `,
})
export class ScrollProgressComponent {
  constructor() {
    useGsap(({ el, gsap }) => {
      gsap.to(el.querySelector('.fill'), {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3, invalidateOnRefresh: true },
      });
    });
  }
}
