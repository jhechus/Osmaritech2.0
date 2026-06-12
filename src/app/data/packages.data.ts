import { Package } from '../models/package.model';

export const PACKAGES: Package[] = [
  {
    id: 'presencia-web',
    name: 'Presencia Web',
    tagline: 'Para negocios que quieren dejar de verse improvisados en internet',
    description: 'Ideal para negocios, profesionistas o emprendedores que necesitan una página profesional para presentarse, explicar sus servicios y facilitar el contacto con sus clientes.',
    features: [
      'Sitio web informativo completo',
      'Hasta 5 secciones o páginas',
      'Diseño responsivo (celular, tablet, escritorio)',
      'Diseño personalizado para tu negocio',
      'Certificado SSL (https)',
      'SEO básico estructural',
      'Botón de WhatsApp integrado',
      'Formulario de contacto',
      'Configuración inicial de dominio y hosting',
      'Entrega por etapas con revisión'
    ],
    ctaText: 'Quiero este paquete',
    accent: 'cyan',
    badge: 'Más popular'
  },
  {
    id: 'landing-venta',
    name: 'Landing de Venta',
    tagline: 'Para presentar una oferta concreta y llevar al visitante a la acción',
    description: 'Ideal cuando necesitas comunicar un servicio específico con claridad, llevar al visitante a una acción concreta: escribir, cotizar o agendar.',
    features: [
      'Landing page enfocada en conversión',
      'Copywriting comercial incluido',
      'Botones de contacto estratégicamente ubicados',
      'Diseño responsivo',
      'Secciones persuasivas',
      'Optimización básica para buscadores',
      'Integración con WhatsApp',
      'Formulario de captación',
      'Certificado SSL',
      'Diseño personalizado'
    ],
    ctaText: 'Quiero este paquete',
    accent: 'violet',
    highlighted: true,
    badge: 'Recomendado'
  },
  {
    id: 'web-mantenimiento',
    name: 'Web + Mantenimiento',
    tagline: 'Para negocios que no quieren preocuparse por la parte técnica',
    description: 'Ideal para negocios que quieren publicar su página con todo lo necesario y mantenerla funcionando correctamente con soporte técnico mensual.',
    features: [
      'Página web profesional completa',
      'Respaldos periódicos automáticos',
      'Actualizaciones del sistema',
      'Revisión mensual de rendimiento',
      'Ajustes menores de contenido',
      'Soporte técnico mensual',
      'Revisión y corrección de errores',
      'Escaneo básico de seguridad',
      'Dominio y hosting configurado',
      'Certificado SSL activo'
    ],
    ctaText: 'Quiero este paquete',
    accent: 'mint'
  },
  {
    id: 'sistema-web',
    name: 'Sistema Web',
    tagline: 'Para negocios que necesitan una herramienta hecha a su medida',
    description: 'Ideal para negocios que necesitan dejar de trabajar con procesos desordenados y quieren una herramienta digital adaptada exactamente a su forma de operar.',
    features: [
      'Panel administrativo personalizado',
      'Formularios y registro de información',
      'Control y seguimiento de solicitudes',
      'Consulta y filtrado de datos',
      'Flujos de trabajo configurados',
      'Diseño responsivo',
      'Accesos por usuario (si aplica)',
      'Base preparada para escalar',
      'Funcionalidades a medida',
      'Documentación de uso básica'
    ],
    ctaText: 'Quiero este paquete',
    accent: 'violet'
  }
];
