import { Directive, input, numberAttribute } from '@angular/core';
import { useGsap } from './use-gsap';

/**
 * Parallax ligado al scroll (scrub). `appParallax` = cuánto se desplaza en % de su alto
 * mientras cruza el viewport. Negativo = sube más rápido que el scroll.
 * En móvil se reduce a la mitad (gsap.matchMedia) para no marear.
 */
@Directive({ selector: '[appParallax]' })
export class ParallaxDirective {
  readonly appParallax = input(-15, { transform: (v: unknown) => numberAttribute(v === '' ? -15 : v, -15) });
  readonly parallaxRotate = input(0, { transform: numberAttribute });

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      if (reduced) return;
      const mm = gsap.matchMedia();
      mm.add({ desktop: '(min-width: 768px)', mobile: '(max-width: 767px)' }, (c) => {
        const factor = c.conditions?.['desktop'] ? 1 : 0.5;
        gsap.fromTo(
          el,
          { yPercent: -this.appParallax() * factor * 0.5, rotate: -this.parallaxRotate() * 0.5 },
          {
            yPercent: this.appParallax() * factor * 0.5,
            rotate: this.parallaxRotate() * 0.5,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      });
      return () => mm.revert();
    });
  }
}
