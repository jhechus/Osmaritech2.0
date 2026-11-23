import { ProcessStep } from '../models/process-step.model';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico del negocio',
    description: 'Empezamos por entender qué vendes, a quién le vendes y qué necesita comunicar tu página o sistema. Sin diagnóstico claro no hay buen diseño.',
    icon: 'search'
  },
  {
    number: '02',
    title: 'Propuesta de estructura',
    description: 'Definimos secciones, mensajes principales, llamadas a la acción y la experiencia que vivirá tu usuario al entrar a tu sitio.',
    icon: 'layers'
  },
  {
    number: '03',
    title: 'Diseño visual',
    description: 'Creamos una propuesta visual moderna, coherente con la personalidad de tu negocio y enfocada en transmitir confianza.',
    icon: 'palette'
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Construimos tu página o sistema para que cargue rápido, se vea bien en cualquier pantalla y sea fácil de usar para tus clientes.',
    icon: 'code'
  },
  {
    number: '05',
    title: 'Revisión y ajustes',
    description: 'Revisamos textos, detalles visuales, enlaces, formularios y funcionamiento general antes de publicar. Tu aprobación va primero.',
    icon: 'refresh'
  },
  {
    number: '06',
    title: 'Publicación',
    description: 'Configuramos dominio, hosting, certificado SSL y dejamos el sitio listo para compartirse con tus clientes.',
    icon: 'rocket'
  },
  {
    number: '07',
    title: 'Soporte o mantenimiento',
    description: 'Si lo necesitas, damos seguimiento técnico: mejoras, respaldos, actualizaciones y ajustes posteriores a la publicación.',
    icon: 'wrench'
  }
];
