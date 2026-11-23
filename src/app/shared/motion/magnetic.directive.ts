import { Directive, input, numberAttribute } from '@angular/core';
import { useGsap } from './use-gsap';

/** Botón "magnético": se desplaza un poco hacia el puntero y vuelve con rebote al salir. */
@Directive({ selector: '[appMagnetic]' })
export class MagneticDirective {
  readonly appMagnetic = input(0.3, { transform: (v: unknown) => numberAttribute(v === '' ? 0.3 : v, 0.3) });

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      if (reduced || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      const strength = this.appMagnetic();
      const x = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
      const y = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - (r.left + r.width / 2)) * strength);
        y((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      return () => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      };
    });
  }
}
