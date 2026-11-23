import { DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { gsap } from 'gsap';
import { MotionService } from '../../core/motion/motion.service';

/**
 * Equivalente Angular de useGSAP: corre `setup` solo en el navegador, después del
 * primer render, dentro de un gsap.context con scope en el host. Al destruir el
 * componente/directiva se revierten tweens, ScrollTriggers y estilos inline.
 *
 * Debe llamarse en un contexto de inyección (constructor o inicializador de campo).
 */
export function useGsap(
  setup: (ctx: { el: HTMLElement; gsap: typeof gsap; reduced: boolean }) => void | (() => void),
): void {
  const el = inject(ElementRef<HTMLElement>).nativeElement as HTMLElement;
  const motion = inject(MotionService);
  let ctx: gsap.Context | undefined;
  let extraCleanup: void | (() => void);

  afterNextRender(() => {
    ctx = gsap.context(() => {
      extraCleanup = setup({ el, gsap, reduced: motion.reducedMotion });
    }, el);
  });

  inject(DestroyRef).onDestroy(() => {
    if (typeof extraCleanup === 'function') extraCleanup();
    ctx?.revert();
  });
}
