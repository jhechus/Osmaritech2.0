import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Punto único de GSAP: registra plugins una vez, expone si el usuario pidió
 * menos movimiento y refresca ScrollTrigger cuando cambia la ruta
 * (el alto de la página cambia y las posiciones de los triggers quedan viejas).
 */
@Injectable({ providedIn: 'root' })
export class MotionService {
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly gsap = gsap;
  readonly ScrollTrigger = ScrollTrigger;

  constructor() {
    if (!this.isBrowser) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out', duration: 0.8 });

    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => requestAnimationFrame(() => ScrollTrigger.refresh()));

    // Las fuentes web cambian el alto del texto al cargar.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }

  get reducedMotion(): boolean {
    return this.isBrowser && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
