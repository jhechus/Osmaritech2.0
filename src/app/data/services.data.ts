import { Service } from '../models/service.model';

export const SERVICES: Service[] = [
  {
    id: 'diseno-desarrollo-web',
    icon: '⬡',
    title: 'Diseño y Desarrollo Web Profesional',
    subtitle: 'Tu presencia digital, construida bien desde el principio',
    description: 'Creamos sitios web modernos, rápidos, funcionales y adaptados a celulares, tablets y computadoras.',
    problem: 'Tu negocio necesita una presencia formal, clara y confiable en internet que represente bien lo que ofreces.',
    benefit: 'Tus clientes pueden entender quién eres, qué ofreces y cómo contactarte sin depender únicamente de redes sociales.',
    features: [
      'Diseño personalizado para tu negocio',
      'Sitio completamente responsivo',
      'Navegación clara e intuitiva',
      'Estructura profesional orientada al usuario',
      'Enfoque en facilitar el contacto',
      'Base preparada para crecer'
    ],
    accent: 'cyan',
    featured: true
  },
  {
    id: 'paginas-negocios',
    icon: '◈',
    title: 'Páginas Web para Negocios',
    subtitle: 'Un lugar formal donde tus clientes pueden conocerte',
    description: 'Sitios web pensados para negocios locales, profesionistas, emprendedores y marcas que necesitan presentar sus servicios de forma clara.',
    problem: 'Muchos negocios tienen información dispersa en redes, mensajes o imágenes, pero no tienen un lugar formal donde concentrar todo.',
    benefit: 'Una página web ayuda a ordenar tu presencia digital y transmitir más confianza antes de que un cliente te escriba.',
    features: [
      'Secciones bien organizadas',
      'Información clara de servicios',
      'Horarios y datos de contacto',
      'Formulario y WhatsApp integrado',
      'Optimización para celular',
      'Dominio y hosting configurado'
    ],
    accent: 'violet',
    featured: true
  },
  {
    id: 'landing-pages',
    icon: '⟐',
    title: 'Landing Pages de Venta',
    subtitle: 'Una página enfocada en convertir visitas en contactos',
    description: 'Páginas enfocadas en presentar un servicio, oferta o idea específica con un mensaje claro y llamadas a la acción.',
    problem: 'Cuando quieres comunicar algo concreto, una página completa puede dispersar la atención. Una landing ayuda a enfocar el mensaje.',
    benefit: 'El visitante entiende rápido qué ofreces, por qué le conviene y cómo contactarte.',
    features: [
      'Mensaje enfocado y claro',
      'Llamadas a la acción estratégicas',
      'Secciones persuasivas',
      'Botón de WhatsApp integrado',
      'Diseño responsivo',
      'Copywriting comercial incluido'
    ],
    accent: 'mint',
    featured: true
  },
  {
    id: 'rediseno',
    icon: '↺',
    title: 'Rediseño de Sitios Existentes',
    subtitle: 'Moderniza tu página sin perder lo que ya tienes',
    description: 'Modernizamos páginas que se ven antiguas, desordenadas, lentas o poco confiables para que transmitan la calidad real de tu negocio.',
    problem: 'Una página vieja puede dar una mala impresión aunque tu negocio sí ofrezca un buen servicio.',
    benefit: 'Mejor imagen, mejor experiencia de usuario y comunicación más clara con tus clientes actuales y nuevos.',
    features: [
      'Mejora visual moderna',
      'Mejor estructura de contenido',
      'Optimización para celulares',
      'Revisión y mejora de textos',
      'Enfoque más comercial',
      'Navegación más clara'
    ],
    accent: 'cyan'
  },
  {
    id: 'mantenimiento',
    icon: '⚙',
    title: 'Mantenimiento Técnico Web',
    subtitle: 'Tu sitio funcionando bien, siempre',
    description: 'Ayudamos a mantener tu sitio funcionando correctamente después de publicarlo. Una página también necesita cuidado técnico.',
    problem: 'Muchos negocios publican su página y la dejan sin atención. Con el tiempo surgen errores, lentitud o problemas de seguridad.',
    benefit: 'Tu sitio se mantiene estable, actualizado y listo para tus clientes en todo momento.',
    features: [
      'Respaldos periódicos',
      'Actualizaciones regulares',
      'Revisión y corrección de errores',
      'Escaneo básico de seguridad',
      'Revisión de rendimiento',
      'Ajustes menores de contenido'
    ],
    accent: 'violet'
  },
  {
    id: 'seo-tecnico',
    icon: '◎',
    title: 'Optimización SEO Básica y Técnica',
    subtitle: 'Estructura más clara para buscadores y usuarios',
    description: 'Preparamos tu sitio con una estructura técnica más sólida para que Google y tus clientes entiendan mejor qué ofreces.',
    problem: 'Una página sin estructura técnica adecuada puede ser difícil de entender para buscadores y usuarios por igual.',
    benefit: 'Tu sitio queda mejor organizado, con títulos, descripciones, URLs y contenido más claro y bien jerarquizado.',
    features: [
      'Títulos y encabezados bien estructurados',
      'Meta descripciones por página',
      'URLs limpias y descriptivas',
      'Etiquetas semánticas correctas',
      'Optimización de velocidad de carga',
      'Preparación básica para Google'
    ],
    accent: 'mint'
  },
  {
    id: 'google-business',
    icon: '⊕',
    title: 'Presencia en Google Business',
    subtitle: 'Que tus clientes te encuentren cuando te buscan',
    description: 'Apoyamos en que la información básica de tu negocio sea más clara y accesible para clientes que te buscan en Google.',
    problem: 'Si tus datos no están claros o actualizados, tus clientes pueden no encontrar horarios, ubicación, contacto ni información importante.',
    benefit: 'Tu negocio se ve más formal, fácil de contactar y confiable para quienes te buscan desde su celular.',
    features: [
      'Alta o mejora de perfil',
      'Datos de contacto actualizados',
      'Horarios y ubicación claros',
      'Descripción del negocio',
      'Categorías adecuadas',
      'Información consistente'
    ],
    accent: 'cyan'
  },
  {
    id: 'sistemas-web',
    icon: '⬢',
    title: 'Sistemas Web Personalizados',
    subtitle: 'Herramientas digitales hechas para tu forma de operar',
    description: 'Creamos herramientas web a medida para organizar procesos, información, solicitudes, registros o tareas internas de tu negocio.',
    problem: 'Muchos negocios trabajan con mensajes de WhatsApp, hojas de cálculo dispersas o procesos desordenados que generan errores.',
    benefit: 'Un sistema personalizado ayuda a tener más control, orden y seguimiento sin depender de soluciones genéricas que no encajan.',
    features: [
      'Panel administrativo',
      'Formularios y registro de información',
      'Control de solicitudes',
      'Consulta y filtrado de datos',
      'Flujos de trabajo personalizados',
      'Reportes básicos'
    ],
    accent: 'violet',
    featured: true
  },
  {
    id: 'automatizacion',
    icon: '⟳',
    title: 'Automatización de Procesos',
    subtitle: 'Menos tiempo en tareas repetitivas, más enfoque en tu negocio',
    description: 'Creamos soluciones para reducir tareas manuales repetitivas y organizar mejor la información y los flujos de trabajo internos.',
    problem: 'El negocio pierde tiempo y comete errores haciendo manualmente tareas que se pueden sistematizar.',
    benefit: 'Menos desorden, menos trabajo repetitivo y procesos más claros para que tu equipo se enfoque en lo que importa.',
    features: [
      'Formularios conectados a procesos internos',
      'Registro automático de información',
      'Notificaciones y alertas',
      'Paneles de seguimiento',
      'Organización de datos automática',
      'Flujos configurados para tu negocio'
    ],
    accent: 'mint'
  },
  {
    id: 'hosting-dominio',
    icon: '◬',
    title: 'Hosting, Dominio y SSL',
    subtitle: 'Todo lo técnico para que tu página esté publicada y segura',
    description: 'Configuramos lo necesario para que tu página esté publicada de forma profesional, con una dirección propia y certificado de seguridad.',
    problem: 'Publicar una página web requiere configuraciones técnicas que pueden ser confusas si no tienes experiencia.',
    benefit: 'Tu página queda lista con dominio profesional, alojamiento confiable y el candado de seguridad que genera confianza en tus visitantes.',
    features: [
      'Dominio: dirección personalizada de tu sitio',
      'Hosting: alojamiento web confiable',
      'SSL: certificado de seguridad (https)',
      'Configuración técnica completa',
      'Correos profesionales (opcional)',
      'Soporte en la configuración inicial'
    ],
    accent: 'cyan'
  }
];
