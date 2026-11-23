import { Directive, input } from '@angular/core';
import { useGsap } from './use-gsap';

/**
 * Dibuja los trazos `[data-draw]` de un SVG con stroke-dashoffset ligado al scroll,
 * y hace aparecer los nodos `[data-node]` cuando el trazo llega a ellos.
 */
@Directive({ selector: '[appDrawSvg]' })
export class DrawSvgDirective {
  readonly drawStart = input('top 75%');
  readonly drawEnd = input('bottom 60%');

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      const paths = gsap.utils.toArray<SVGGeometryElement>(el.querySelectorAll('[data-draw]'));
      const nodes = gsap.utils.toArray<SVGElement>(el.querySelectorAll('[data-node]'));
      if (reduced) return;

      paths.forEach((p) => {
        const len = p.getTotalLength();
        // opacity 0 también oculta la punta de flecha (marker) hasta que el trazo empieza.
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
      });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: el, start: this.drawStart(), end: this.drawEnd(), scrub: 0.6 },
      });
      nodes.forEach((n, i) => {
        tl.fromTo(n, { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' }, i * 0.5);
      });
      paths.forEach((p, i) => {
        tl.set(p, { opacity: 1 }, 0.3 + i * 0.5);
        tl.to(p, { strokeDashoffset: 0, duration: 0.6 }, 0.3 + i * 0.5);
      });
    });
  }
}
