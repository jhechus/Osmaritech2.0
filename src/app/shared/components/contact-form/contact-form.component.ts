import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_sa3g2ri';
const EMAILJS_TEMPLATE_ID = 'template_ap9fl9i';
const EMAILJS_PUBLIC_KEY  = 'SAWRCsQMykvklf4uX';

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
    email: '',
    phone: '',
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
  error = false;

  onSubmit(): void {
    if (!this.formData.name || !this.formData.message) return;
    this.submitting = true;
    this.error = false;

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: this.formData.name,
        email:     this.formData.email,
        phone:     this.formData.phone || 'No proporcionado',
        business:  this.formData.business,
        service:   this.formData.service,
        message:   this.formData.message,
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      this.submitting = false;
      this.submitted = true;
    }).catch(() => {
      this.submitting = false;
      this.error = true;
    });
  }

  reset(): void {
    this.submitted = false;
    this.error = false;
    this.formData = { name: '', email: '', phone: '', business: '', service: '', message: '' };
  }
}
