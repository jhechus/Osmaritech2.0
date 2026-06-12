import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'nutrilanding-pro',
    name: 'NutriLanding Pro',
    businessType: 'Nutrióloga independiente',
    category: 'Landing Page',
    problem: 'Dependía únicamente de redes sociales y sus potenciales clientes preguntaban lo mismo por mensaje: precios, qué incluye, cómo funciona. No tenía un lugar donde explicarlo con claridad.',
    solution: 'Landing page con secciones de servicios, beneficios del trabajo, preguntas frecuentes, testimonios y botón directo a WhatsApp. Copywriting enfocado en el resultado que buscan sus clientes.',
    result: 'Más confianza desde el primer contacto, información clara disponible 24/7 y menos tiempo respondiendo dudas repetitivas por mensaje.',
    services: ['Landing page', 'Copywriting comercial', 'Diseño responsivo', 'WhatsApp integrado', 'SSL y hosting'],
    accentColor: '#10D98E',
    icon: '◈'
  },
  {
    id: 'tallerweb-mx',
    name: 'TallerWeb MX',
    businessType: 'Taller mecánico local',
    category: 'Página Web para Negocio',
    problem: 'Los clientes no encontraban de forma fácil los servicios que ofrecía, los horarios de atención, la dirección ni cómo comunicarse. La única referencia era un número en tarjeta de presentación.',
    solution: 'Página web completa con servicios, ubicación interactiva, horarios, preguntas frecuentes y múltiples botones de contacto. Estructura preparada para Google.',
    result: 'Imagen más profesional, contacto más fácil para nuevos clientes y presencia formal en internet por primera vez.',
    services: ['Página web para negocio', 'SEO básico técnico', 'Google Business', 'Hosting y SSL', 'Diseño responsivo'],
    accentColor: '#00CFFF',
    icon: '⬡'
  },
  {
    id: 'controlflow',
    name: 'ControlFlow',
    businessType: 'Empresa con procesos internos',
    category: 'Sistema Web Personalizado',
    problem: 'Las solicitudes internas se organizaban por mensajes de WhatsApp, hojas de cálculo y notas. No había manera de saber el estado de cada proceso ni quién tenía pendiente qué.',
    solution: 'Sistema web con panel administrativo, formularios de solicitud, seguimiento por estado, historial y acceso diferenciado por tipo de usuario.',
    result: 'Procesos más ordenados, menos pérdida de información, mejor seguimiento interno y ahorro de tiempo en coordinación diaria.',
    services: ['Sistema web personalizado', 'Panel administrativo', 'Formularios de solicitud', 'Flujos de trabajo', 'Diseño responsivo'],
    accentColor: '#8B5CF6',
    icon: '⬢'
  }
];
