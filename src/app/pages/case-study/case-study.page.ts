import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AGENTS, CHAT, CHUBOT, GUARANTEES, PIPELINE } from '../../data/projects.data';
import { MOTION, useGsap } from '../../shared/motion';
import { NextPageComponent } from '../../shared/ui/cta-banner.component';
import { IconComponent } from '../../shared/ui/icon.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';

@Component({
  selector: 'app-case-study-page',
  imports: [RouterLink, IconComponent, SectionHeadingComponent, NextPageComponent, ...MOTION],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './case-study.page.html',
  styleUrl: './case-study.page.scss',
})
export default class CaseStudyPage {
  readonly xp = CHUBOT;
  readonly agents = AGENTS;
  readonly pipeline = PIPELINE;
  readonly guarantees = GUARANTEES;
  readonly chat = CHAT;

  readonly meta = [
    { k: 'Tipo', v: 'Sistema a la medida' },
    { k: 'Año', v: CHUBOT.year },
    { k: 'Se usa desde', v: 'Telegram y navegador' },
    { k: 'Ideal para', v: 'Dueños que hacen de todo' },
  ];

  readonly gains = [
    { icon: 'clock', title: 'Horas de vuelta', text: 'Lo que antes te tomaba la tarde, ahora es un mensaje y unos minutos de revisión.' },
    { icon: 'chat', title: 'Desde tu celular', text: 'No hay que aprender un programa nuevo: le escribes a Chubot como le escribirías a un empleado.' },
    { icon: 'layers', title: 'Todo en orden', text: 'Cada tarea queda registrada: qué se pidió, quién la hizo, qué cambiaste y cuándo se aprobó.' },
    { icon: 'heart', title: 'Con la voz de tu marca', text: 'Los asistentes conocen tu negocio: qué vendes, a quién y cómo hablas. No suenan genéricos.' },
    { icon: 'building', title: 'Varios negocios, sin mezclar', text: 'Si tienes más de una marca, cada una tiene su información y su tono. Nunca se cruzan.' },
    { icon: 'wallet', title: 'Gasto bajo control', text: 'Un límite mensual que tú defines. Sin cobros inesperados.' },
  ];

  readonly ideas = [
    'Una clínica que responde dudas frecuentes y confirma citas con el tono de su consultorio.',
    'Una tienda que prepara sus publicaciones de la semana y las descripciones de producto.',
    'Un despacho que redacta correos de seguimiento a prospectos y tú solo los apruebas.',
  ];

  constructor() {
    useGsap(({ el, gsap, reduced }) => {
      if (reduced) return;
      const mm = gsap.matchMedia();

      // 1) Portada: la imagen se "aleja" (scale) mientras el texto sube.
      gsap.fromTo('.cs-cover img', { scale: 1.25 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.cs-cover', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // 2) Chat de Telegram: en escritorio la sección se fija y los mensajes llegan con el scroll.
      const msgs = gsap.utils.toArray<HTMLElement>('.msg');
      const steps = gsap.utils.toArray<HTMLElement>('.how-step');
      mm.add('(min-width: 900px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: '.how', start: 'top top', end: `+=${msgs.length * 380}`, pin: true, scrub: 0.5 },
        });
        msgs.forEach((m, i) => {
          tl.fromTo(m, { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.6)' }, i * 1.2);
          if (steps[i]) {
            tl.to(steps, { opacity: 0.3, duration: 0.3 }, i * 1.2).to(steps[i], { opacity: 1, duration: 0.3 }, i * 1.2);
          }
        });
        tl.to({}, { duration: 0.6 });
      });
      mm.add('(max-width: 899px)', () => {
        msgs.forEach((m) =>
          gsap.from(m, { opacity: 0, y: 24, duration: 0.7, scrollTrigger: { trigger: m, start: 'top 90%', once: true } }),
        );
      });

      // 3) Pipeline: scroll horizontal fijado en escritorio; la barra de progreso avanza con él.
      mm.add('(min-width: 900px)', () => {
        const track = el.querySelector<HTMLElement>('.pipe-track')!;
        const distance = () => track.scrollWidth - window.innerWidth + 80;
        const move = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.pipe',
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        gsap.fromTo('.pipe-progress span', { scaleX: 0 }, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.pipe', start: 'top top', end: () => `+=${distance()}`, scrub: true, invalidateOnRefresh: true },
        });
        gsap.utils.toArray<HTMLElement>('.state').forEach((card) => {
          gsap.from(card, {
            opacity: 0.25,
            scale: 0.9,
            rotateY: -18,
            ease: 'none',
            scrollTrigger: { trigger: card, containerAnimation: move, start: 'left 95%', end: 'left 55%', scrub: true },
          });
        });
      });

      // 4) Garantías apiladas: cada tarjeta se encoge cuando la siguiente la tapa.
      const layers = gsap.utils.toArray<HTMLElement>('.layer');
      layers.slice(0, -1).forEach((card, i) => {
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: { trigger: layers[i + 1], start: 'top 85%', end: 'top 25%', scrub: true },
        });
      });

      // 5) Tablero: entra inclinado en 3D y se aplana al llegar.
      gsap.fromTo('.board-img', { rotateX: 28, scale: 0.88, y: 60 }, {
        rotateX: 0,
        scale: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.board', start: 'top bottom', end: 'center center', scrub: true },
      });

      // Los pins agregan alto a la página: ordena y recalcula los triggers que ya existían.
      requestAnimationFrame(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    });
  }
}
