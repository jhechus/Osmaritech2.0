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
  },
  {
    id: 'la-terraza',
    name: 'La Terraza',
    businessType: 'Restaurante — Sistema web completo',
    category: 'Sistema Web Personalizado',
    problem: 'El restaurante gestionaba reservaciones por teléfono, el menú era estático y no había forma de centralizar pedidos ni horarios. El dueño no tenía visibilidad en tiempo real de lo que pasaba en el negocio.',
    solution: 'Sistema full-stack con frontend para clientes (menú digital interactivo, reservaciones en línea y pedidos) y panel de administración completo para gestionar el menú, revisar y confirmar reservaciones, administrar horarios y monitorear pedidos en tiempo real.',
    result: 'El negocio pasó de gestionar todo manualmente a tener un sistema centralizado que reduce errores, ahorra tiempo operativo y ofrece una experiencia digital profesional a sus clientes.',
    services: ['Angular', 'NestJS', 'PostgreSQL', 'Menú digital', 'Reservaciones en línea', 'Gestión de pedidos', 'Panel de administración', 'Diseño responsivo'],
    accentColor: '#FF6B35',
    icon: '▣',
    url: 'https://la-terraza-1.onrender.com/',
    note: '⚠ Alojado en servidor gratuito — puede tardar unos segundos en cargar la primera vez.'
  }
];
