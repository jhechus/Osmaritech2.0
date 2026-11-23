import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionService } from '../core/motion/motion.service';
import { MagneticDirective } from '../shared/motion/magnetic.directive';
import { useGsap } from '../shared/motion/use-gsap';
import { IconComponent } from '../shared/ui/icon.component';
import { NAV, WHATSAPP } from './nav';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, IconComponent, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: { '[class.hidden]': 'hidden()', '[class.scrolled]': 'scrolled()', '[class.open]': 'open()' },
})
export class HeaderComponent {
  readonly nav = NAV;
  readonly wa = WHATSAPP;
  readonly open = signal(false);
  readonly hidden = signal(false);
  readonly scrolled = signal(false);
  private readonly overlay = viewChild<ElementRef<HTMLElement>>('overlay');
  private readonly motion = inject(MotionService);

  constructor() {
    // Se oculta al bajar y reaparece al subir.
    useGsap(() => {
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          this.scrolled.set(self.scroll() > 40);
          if (!this.open()) this.hidden.set(self.direction === 1 && self.scroll() > 240);
        },
      });
    });

    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        this.hidden.set(false);
        if (this.open()) this.toggle(false);
      });
  }

  toggle(force?: boolean): void {
    const next = force ?? !this.open();
    this.open.set(next);
    if (!this.motion.isBrowser) return;
    document.documentElement.classList.toggle('no-scroll', next);
    const el = this.overlay()?.nativeElement;
    if (!el || !next || this.motion.reducedMotion) return;
    const at = 'at calc(100% - 3rem) 2.5rem';
    gsap.fromTo(el, { clipPath: `circle(0% ${at})` }, { clipPath: `circle(150% ${at})`, duration: 0.8, ease: 'power3.inOut' });
    gsap.fromTo(
      el.querySelectorAll('.m-link'),
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.07, delay: 0.25, duration: 0.8, ease: 'power4.out' },
    );
  }
}
