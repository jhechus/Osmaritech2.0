import { ProcessStep } from '../models/process-step.model';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico del negocio',
    description: 'Empezamos por entender qué vendes, a quién le vendes y qué necesita comunicar tu página o sistema. Sin diagnóstico claro no hay buen diseño.',
    icon: '◎'
  },
  {
    number: '02',
    title: 'Propuesta de estructura',
    description: 'Definimos secciones, mensajes principales, llamadas a la acción y la experiencia que vivirá tu usuario al entrar a tu sitio.',
    icon: '⟐'
  },
  {
    number: '03',
    title: 'Diseño visual',
    description: 'Creamos una propuesta visual moderna, coherente con la personalidad de tu negocio y enfocada en transmitir confianza.',
    icon: '◈'
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Construimos la página o sistema con código limpio, diseño responsivo, buen rendimiento y las mejores prácticas técnicas.',
    icon: '⬡'
  },
  {
    number: '05',
    title: 'Revisión y ajustes',
    description: 'Revisamos textos, detalles visuales, enlaces, formularios y funcionamiento general antes de publicar. Tu aprobación va primero.',
    icon: '↺'
  },
  {
    number: '06',
    title: 'Publicación',
    description: 'Configuramos dominio, hosting, certificado SSL y dejamos el sitio listo para compartirse con tus clientes.',
    icon: '⊕'
  },
  {
    number: '07',
    title: 'Soporte o mantenimiento',
    description: 'Si lo necesitas, damos seguimiento técnico: mejoras, respaldos, actualizaciones y ajustes posteriores a la publicación.',
    icon: '⚙'
  }
];
