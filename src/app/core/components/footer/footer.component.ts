import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  services = [
    { label: 'Diseño y Desarrollo Web', path: '/servicios' },
    { label: 'Landing Pages', path: '/servicios' },
    { label: 'Sistemas Web', path: '/servicios' },
    { label: 'Mantenimiento Web', path: '/servicios' },
    { label: 'SEO Técnico', path: '/servicios' },
    { label: 'Hosting y Dominio', path: '/servicios' }
  ];

  links = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Paquetes', path: '/paquetes' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Proceso', path: '/proceso' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' }
  ];
}
