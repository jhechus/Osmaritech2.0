import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Osmaritech — Diseño y Desarrollo Web Profesional'
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Servicios — Osmaritech'
  },
  {
    path: 'paquetes',
    loadComponent: () => import('./pages/packages/packages.component').then(m => m.PackagesComponent),
    title: 'Paquetes — Osmaritech'
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Proyectos — Osmaritech'
  },
  {
    path: 'proceso',
    loadComponent: () => import('./pages/process/process.component').then(m => m.ProcessComponent),
    title: 'Proceso de Trabajo — Osmaritech'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'Sobre Osmaritech'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto — Osmaritech'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
