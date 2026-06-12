import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SERVICES } from '../../data/services.data';
import { PACKAGES } from '../../data/packages.data';
import { PROJECTS } from '../../data/projects.data';
import { BENEFITS } from '../../data/benefits.data';
import { PROCESS_STEPS } from '../../data/process.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, CommonModule,
    SectionTitleComponent, CtaSectionComponent,
    ServiceCardComponent, PackageCardComponent, ProjectCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  featuredServices = SERVICES.filter(s => s.featured).slice(0, 4);
  packages = PACKAGES;
  projects = PROJECTS;
  benefits = BENEFITS;
  processSteps = PROCESS_STEPS.slice(0, 4);

  techTags = [
    'Diseño responsivo',
    'SEO incluido',
    'WhatsApp integrado',
    'Dominio y hosting',
    'SSL gratuito',
    'Sistemas a medida'
  ];

  stats = [
    { value: '100%', label: 'Proyectos responsivos' },
    { value: 'SSL', label: 'Seguridad incluida' },
    { value: '24/7', label: 'Disponibilidad' },
    { value: 'A+', label: 'Rendimiento web' }
  ];

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
