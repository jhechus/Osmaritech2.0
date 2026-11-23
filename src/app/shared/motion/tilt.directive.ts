import { Directive, input, numberAttribute } from '@angular/core';
import { useGsap } from './use-gsap';

/**
 * Inclinación 3D siguiendo el puntero + brillo (`--mx`, `--my` para un radial-gradient en CSS).
 * Solo en dispositivos con hover real; usa quickTo para no crear un tween por evento.
 */
@Directive({ selector: '[appTilt]', host: { class: 'tilt' } })
export class TiltDirective {
  readonly appTilt = input(8, { transform: (v: unknown) => numberAttribute(v === '' ? 8 : v, 8) });

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      if (reduced || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      const max = this.appTilt();
      gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' });
      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' });
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' });

      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ry((px - 0.5) * max * 2);
        rx((0.5 - py) * max * 2);
        el.style.setProperty('--mx', `${px * 100}%`);
        el.style.setProperty('--my', `${py * 100}%`);
      };
      const leave = () => {
        rx(0);
        ry(0);
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      return () => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      };
    });
  }
}
