import { Directive, input } from '@angular/core';
import { useGsap } from './use-gsap';

/** Cuenta de 0 a `appCounter` cuando el número entra en pantalla. El SSR ya pinta el valor final. */
@Directive({ selector: '[appCounter]' })
export class CounterDirective {
  readonly appCounter = input.required<number>();
  readonly counterSuffix = input('');

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      const end = this.appCounter();
      const suffix = this.counterSuffix();
      if (reduced) return;
      const state = { v: 0 };
      el.textContent = `0${suffix}`;
      gsap.to(state, {
        v: end,
        duration: 1.6,
        ease: 'power2.out',
        snap: { v: 1 },
        onUpdate: () => (el.textContent = `${state.v}${suffix}`),
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });
  }
}
