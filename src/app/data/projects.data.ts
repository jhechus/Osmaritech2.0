import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'nutricion-plantilla',
    name: 'Nutricion plantilla',
    businessType: 'Nutrióloga independiente — Daniela Rivera',
    category: 'Landing Page',
    problem: 'Página demo desarrollada para mostrar un ejemplo real de lo que se puede construir para un negocio de nutrición. Refleja la estructura, el diseño y las secciones típicas de una landing page profesional para este tipo de servicio.',
    solution: 'Landing page completa con hero de impacto, métricas de confianza (+500 pacientes, calificación 5.0), sección de servicios con 6 especialidades, planes de precios claros, testimonios con resultados reales, proceso de atención en 4 pasos, FAQ y múltiples puntos de contacto con WhatsApp integrado.',
    result: 'Una página que responde todas las dudas antes de que el cliente pregunte, genera confianza con testimonios y métricas reales, y facilita el primer contacto sin fricciones.',
    services: ['Landing page', 'Copywriting comercial', 'Sección de precios', 'Testimonios', 'FAQ', 'Diseño responsivo', 'WhatsApp integrado'],
    accentColor: '#10D98E',
    icon: '◈',
    url: 'https://nutri-demo-hazel.vercel.app/'
  }
];
