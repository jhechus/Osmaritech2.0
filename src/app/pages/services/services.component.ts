import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTitleComponent, CtaSectionComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  services = SERVICES;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
