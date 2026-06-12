import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { PACKAGES } from '../../data/packages.data';
import { FAQS } from '../../data/faqs.data';
import { Faq } from '../../models/faq.model';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTitleComponent, CtaSectionComponent, PackageCardComponent],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent implements AfterViewInit {
  packages = PACKAGES;
  faqs = FAQS;
  openFaq: number | null = null;

  toggleFaq(i: number): void {
    this.openFaq = this.openFaq === i ? null : i;
  }

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
