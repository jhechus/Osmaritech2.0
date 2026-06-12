import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  formData = {
    name: '',
    business: '',
    service: '',
    message: ''
  };

  services = [
    'Diseño y Desarrollo Web',
    'Página Web para Negocio',
    'Landing Page de Venta',
    'Rediseño de Sitio Existente',
    'Mantenimiento Técnico Web',
    'Optimización SEO Técnica',
    'Sistema Web Personalizado',
    'Automatización de Procesos',
    'Hosting, Dominio y SSL',
    'No estoy seguro / Quiero asesoría'
  ];

  submitted = false;
  submitting = false;

  onSubmit(): void {
    if (!this.formData.name || !this.formData.message) return;
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
    }, 1200);
  }

  reset(): void {
    this.submitted = false;
    this.formData = { name: '', business: '', service: '', message: '' };
  }
}
