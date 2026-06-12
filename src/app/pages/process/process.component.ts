import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { ProcessStepComponent } from '../../shared/components/process-step/process-step.component';
import { PROCESS_STEPS } from '../../data/process.data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTitleComponent, CtaSectionComponent, ProcessStepComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements AfterViewInit {
  steps = PROCESS_STEPS;

  trustPoints = [
    { icon: '◎', text: 'Comunicación clara en cada etapa del proyecto' },
    { icon: '◈', text: 'Entregas por etapas para que puedas revisar el avance' },
    { icon: '⬡', text: 'Revisión y aprobación antes de publicar' },
    { icon: '◬', text: 'Sitio preparado para crecer y mejorar con el tiempo' },
    { icon: '⊕', text: 'Sin tecnicismos innecesarios en nuestras conversaciones' }
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
