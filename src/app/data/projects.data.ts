/**
 * Proyectos del portafolio. Hoy solo Chubot (Oficina Virtual), que está en producción.
 * Escrito para clientes: se vende lo que el sistema resuelve, no la tecnología.
 * Las capturas de public/images/chubot/ son del panel real corriendo en modo demo.
 */
export interface Metric {
  value: number;
  suffix?: string;
  label: string;
}

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  codename: string;
  category: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  cover: Shot;
  shots: Shot[];
  /** Etiquetas cortas de lo que el cliente obtiene. */
  perks: string[];
  metrics: Metric[];
}

export interface Agent {
  name: string;
  role: string;
  color: string;
  does: string[];
}

export interface PipelineStep {
  label: string;
  who: string;
  icon: string;
  text: string;
  color: string;
}

export interface Guarantee {
  icon: string;
  title: string;
  text: string;
}

export const CHUBOT: Project = {
  slug: 'chubot',
  name: 'Oficina Virtual',
  codename: 'Chubot',
  category: 'Sistema a la medida con inteligencia artificial',
  year: '2026',
  summary:
    'Un equipo de asistentes con inteligencia artificial que trabaja para tu negocio. Le mandas un mensaje a Chubot desde tu celular, él reparte el trabajo entre sus asistentes y, cuando terminan, te avisa para que revises. Nada se publica ni se envía sin tu visto bueno.',
  problem:
    'El dueño de un negocio hace de todo: escribe publicaciones, responde clientes, prepara correos y busca nuevos prospectos. Son tareas importantes, pero se comen el día y casi siempre quedan para después.',
  solution:
    'Un "equipo digital" al que le delegas con un simple mensaje de Telegram. Cada asistente se especializa en algo (redacción, ventas, soporte, diseño) y conoce cómo habla tu marca.',
  result:
    'El dueño manda una instrucción desde el celular y en minutos tiene borradores listos para revisar, ordenados en un tablero. Delega sin perder el control y recupera horas de su semana.',
  cover: {
    src: 'images/chubot/oficina-zoom.webp',
    alt: 'Vista "Oficina" de Chubot: oficina virtual con salas por área y un personaje por cada asistente',
    caption: 'La oficina virtual: ves en tiempo real qué está haciendo cada asistente.',
  },
  shots: [
    {
      src: 'images/chubot/tablero.webp',
      alt: 'Tablero de Chubot con columnas Pendiente, En progreso, En corrección, Espera de aprobación y Completado',
      caption: 'El tablero: aprobar o pedir cambios es un solo clic.',
    },
    {
      src: 'images/chubot/oficina.webp',
      alt: 'Panel de la oficina con la lista de asistentes y lo que está haciendo cada uno',
      caption: 'Tu equipo de un vistazo: quién trabaja, quién espera tu aprobación.',
    },
  ],
  perks: ['Se usa desde Telegram', 'Tú apruebas todo', 'Trabaja día y noche', 'Conoce la voz de tu marca', 'Varios negocios a la vez', 'Límite de gasto mensual'],
  metrics: [
    { value: 6, label: 'asistentes trabajando en equipo' },
    { value: 1, label: 'mensaje para delegar varias tareas' },
    { value: 24, suffix: '/7', label: 'disponible, también de noche' },
    { value: 100, suffix: '%', label: 'revisado por ti antes de salir' },
  ],
};

export const PROJECTS: Project[] = [CHUBOT];

export const AGENTS: Agent[] = [
  { name: 'Luna', role: 'Redacción', color: '#e98cf2', does: ['Publicaciones', 'Correos', 'Textos para tu web'] },
  { name: 'Mateo', role: 'Marketing', color: '#ffb347', does: ['Ideas de contenido', 'Calendario de redes'] },
  { name: 'Iris', role: 'Diseño y video', color: '#a98bff', does: ['Ideas de imágenes', 'Guiones de video'] },
  { name: 'Bruno', role: 'Ventas', color: '#3cc8ff', does: ['Mensajes a prospectos', 'Correos de venta'] },
  { name: 'Nico', role: 'Tecnología', color: '#2f6bff', does: ['Pequeñas herramientas', 'Automatizaciones'] },
  { name: 'Sofi', role: 'Atención a clientes', color: '#3ee6a8', does: ['Respuestas a clientes', 'Tono de tu marca'] },
];

export const PIPELINE: PipelineStep[] = [
  { label: 'Recibido', who: 'Chubot', icon: 'bot', color: '#8a8f9c', text: 'Chubot lee tu mensaje, lo divide en tareas y elige al asistente indicado para cada una.' },
  { label: 'Trabajando', who: 'El asistente', icon: 'sparkles', color: '#3cc8ff', text: 'El asistente prepara un borrador con la información y el estilo de tu negocio.' },
  { label: 'Listo para revisar', who: 'Te avisa', icon: 'eye', color: '#ffb347', text: 'Te llega un aviso al celular. El asistente no puede ir más allá sin ti.' },
  { label: 'Ajustes', who: 'Tú decides', icon: 'refresh', color: '#e98cf2', text: '¿Algo no te convenció? Escribe qué cambiar y el asistente lo rehace.' },
  { label: 'Aprobado', who: 'Tú decides', icon: 'check', color: '#3ee6a8', text: 'Solo tú puedes dar algo por terminado. Así nada sale sin tu permiso.' },
];

export const GUARANTEES: Guarantee[] = [
  { icon: 'user', title: 'La última palabra es tuya', text: 'Los asistentes preparan borradores; ninguno puede aprobar su propio trabajo ni publicar por su cuenta.' },
  { icon: 'shield', title: 'Protegido aunque algo falle', text: 'La regla de "nada sale sin aprobación" está reforzada en varias capas del sistema, no depende de una sola.' },
  { icon: 'lock', title: 'Solo tú das órdenes', text: 'Chubot ignora a cualquier persona que no seas tú, y el panel está protegido con acceso privado.' },
  { icon: 'wallet', title: 'Sin sorpresas en el gasto', text: 'Defines un límite mensual. Si se alcanza, el equipo se pausa y te avisa.' },
];

export const CHAT: { from: 'me' | 'bot'; text: string }[] = [
  { from: 'me', text: 'Prepara 3 posts de LinkedIn sobre páginas web para negocios y un correo para ofrecer nuestros servicios a gimnasios.' },
  { from: 'bot', text: 'Listo, lo dividí en 2 tareas:\n• Luna (Redacción) → 3 posts\n• Bruno (Ventas) → correo para gimnasios' },
  { from: 'bot', text: '✅ Luna terminó los 3 posts. Están listos para que los revises.' },
  { from: 'me', text: 'Pedir cambios: el segundo post más corto.' },
];
