import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  contactInfo = [
    {
      icon: '✉',
      label: 'Correo electrónico',
      value: 'contacto@osmaritech.com',
      href: 'mailto:contacto@osmaritech.com',
      accent: 'cyan'
    },
    {
      icon: '◆',
      label: 'WhatsApp',
      value: 'Escríbeme directamente',
      href: 'https://wa.me/521XXXXXXXXXX?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto%20web',
      accent: 'mint'
    }
  ];

  promises = [
    'Te respondo en menos de 24 horas',
    'Sin presión ni ventas agresivas',
    'Si no tienes claro qué necesitas, te oriento',
    'Primera consulta sin costo'
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
