import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page'),
    title: 'Osmaritech — Diseño y Desarrollo Web Profesional',
    data: { description: 'Páginas web, landing pages y sistemas web personalizados para negocios que quieren verse profesionales y facilitar el contacto con sus clientes.' },
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services.page'),
    title: 'Servicios — Osmaritech',
    data: { description: 'Diseño web, landing pages, rediseño, mantenimiento, SEO técnico, sistemas web y automatización para negocios.' },
  },
  {
    path: 'paquetes',
    loadComponent: () => import('./pages/packages/packages.page'),
    title: 'Paquetes — Osmaritech',
    data: { description: 'Paquetes de presencia web, landing de venta, web con mantenimiento y sistemas web a medida. Sin costos ocultos.' },
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects/projects.page'),
    title: 'Proyectos — Osmaritech',
    data: { description: 'Proyectos de Osmaritech: Chubot, una oficina virtual de agentes de IA con aprobación humana.' },
  },
  {
    path: 'proyectos/chubot',
    loadComponent: () => import('./pages/case-study/case-study.page'),
    title: 'Chubot · Caso de estudio — Osmaritech',
    data: { description: 'Caso de estudio de Chubot: orquestador de IA con agentes, tablero kanban en vivo y aprobación humana protegida en cuatro capas.' },
  },
  {
    path: 'proceso',
    loadComponent: () => import('./pages/process/process.page'),
    title: 'Proceso de Trabajo — Osmaritech',
    data: { description: 'Así trabajamos: diagnóstico, estructura, diseño, desarrollo, revisión, publicación y soporte.' },
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about/about.page'),
    title: 'Sobre Osmaritech',
    data: { description: 'Osmaritech: una marca de desarrollo web creada para negocios reales.' },
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.page'),
    title: 'Contacto — Osmaritech',
    data: { description: 'Cuéntanos qué necesitas y te ayudamos a convertirlo en una página, landing o sistema funcional.' },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
