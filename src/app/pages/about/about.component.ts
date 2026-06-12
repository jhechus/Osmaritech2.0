import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, CtaSectionComponent, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  values = [
    { icon: '◎', title: 'Claridad', desc: 'Preferimos comunicar bien a impresionar con tecnicismos. Tu negocio necesita respuestas claras, no vocabulario técnico.' },
    { icon: '◈', title: 'Diseño con intención', desc: 'Cada elemento visual tiene un propósito: generar confianza, explicar mejor o facilitar el contacto con tus clientes.' },
    { icon: '⬡', title: 'Tecnología útil', desc: 'No construimos cosas complicadas por el gusto de hacerlas. La tecnología es un medio, no un fin.' },
    { icon: '⊕', title: 'Comunicación honesta', desc: 'Prefiero decirte lo que funciona y lo que no, aunque no sea lo que querías escuchar.' },
    { icon: '◬', title: 'Resultados reales', desc: 'El éxito no es una página bonita: es que esa página ayude a tu negocio a generar más confianza y contactos.' },
    { icon: '↺', title: 'Soluciones pensadas', desc: 'Cada negocio es diferente. No aplico la misma plantilla a todos: entiendo tu caso y propongo lo que tiene sentido.' }
  ];

  focuses = [
    'Diseño y desarrollo web profesional',
    'Landing pages de venta',
    'Páginas web para negocios y profesionistas',
    'Rediseño de sitios existentes',
    'Sistemas web personalizados',
    'Automatización de procesos internos',
    'Mantenimiento técnico web',
    'SEO básico y técnico',
    'Hosting, dominio y SSL'
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
