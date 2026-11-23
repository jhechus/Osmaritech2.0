import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BENEFITS } from '../../data/benefits.data';
import { PACKAGES } from '../../data/packages.data';
import { PROCESS_STEPS } from '../../data/process.data';
import { CHUBOT } from '../../data/projects.data';
import { SERVICES } from '../../data/services.data';
import { MOTION, useGsap } from '../../shared/motion';
import { NextPageComponent } from '../../shared/ui/cta-banner.component';
import { IconComponent } from '../../shared/ui/icon.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';
import { ChipComponent } from '../../shared/ui/tech-chip.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, IconComponent, SectionHeadingComponent, NextPageComponent, ChipComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export default class HomePage {
  readonly project = CHUBOT;
  readonly benefits = BENEFITS;
  readonly featured = SERVICES.filter((s) => s.featured).slice(0, 4);
  readonly steps = PROCESS_STEPS.slice(0, 4);
  readonly packages = PACKAGES;

  private readonly words = ['Páginas web', 'Landing pages', 'Sistemas a medida', 'Mantenimiento', 'SEO técnico', 'Automatización', 'Hosting y SSL'];
  readonly marquee = [...this.words, ...this.words];

  readonly stats = [
    { value: '100%', label: 'Adaptadas a celular' },
    { value: '24/7', label: 'Tu página trabajando por ti' },
    { value: '1 clic', label: 'Para que te escriban por WhatsApp' },
    { value: '0', label: 'Tecnicismos para ti' },
  ];

  readonly bad = ['Información dispersa entre redes y mensajes', 'Sin un lugar formal para explicar tus servicios', 'Clientes que se van sin preguntar'];

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      if (reduced) return;

      // Entrada del hero.
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('.hero-shot', { rotateX: 35, rotateY: -20, y: 120, opacity: 0, duration: 1.6 }, 0.15)
        .from('.float-chip', { scale: 0, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'back.out(2)' }, 0.9)
        .from('.badge', { rotate: -120, opacity: 0, duration: 1.2 }, 0.7)
        .from('.stats > *', { y: 24, opacity: 0, stagger: 0.08, duration: 0.8 }, 0.7);

      // El navegador del hero se endereza y se aleja con el scroll.
      gsap.to('.hero-shot', {
        rotateX: 0,
        rotateY: 0,
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-copy', {
        yPercent: 20,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      // Marquesina que acelera y cambia de sentido con el scroll.
      const track = el.querySelector<HTMLElement>('.marquee-track');
      if (track) {
        const loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 30, repeat: -1 });
        const boost = gsap.utils.clamp(1, 6);
        gsap.timeline({
          scrollTrigger: {
            trigger: '.marquee',
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
              const dir = self.direction;
              gsap.to(loop, {
                timeScale: dir * boost(1 + Math.abs(self.getVelocity()) / 500),
                duration: 0.2,
                overwrite: true,
                onComplete: () => void gsap.to(loop, { timeScale: dir, duration: 1.2 }),
              });
            },
          },
        });
      }

      // Problema: las tarjetas "malas" se tachan y la buena se enciende al hacer scroll.
      const strike = gsap.timeline({
        scrollTrigger: { trigger: '.problem-cards', start: 'top 70%', end: 'bottom 45%', scrub: 0.6 },
      });
      strike
        .to('.p-card.bad .line', { scaleX: 1, stagger: 0.4, duration: 0.6, ease: 'none' })
        .to('.p-card.bad', { opacity: 0.45, stagger: 0.4, duration: 0.6 }, 0.3)
        .fromTo('.p-card.good', { scale: 0.92, opacity: 0.3 }, { scale: 1, opacity: 1, duration: 0.8 }, '>-0.2');

      // Proyecto destacado: la captura entra con clip y se desplaza dentro de su marco.
      gsap.fromTo('.feature-shot img', { yPercent: 6, scale: 1.12 }, {
        yPercent: -6,
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.feature', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // Pasos del proceso: la línea se llena con el scroll.
      gsap.fromTo('.steps-line span', { scaleX: 0 }, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.steps', start: 'top 75%', end: 'bottom 55%', scrub: true },
      });
    });
  }
}
