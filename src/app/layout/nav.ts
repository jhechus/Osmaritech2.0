export interface NavItem {
  path: string;
  label: string;
  index: string;
}

export const NAV: NavItem[] = [
  { path: '/servicios', label: 'Servicios', index: '01' },
  { path: '/paquetes', label: 'Paquetes', index: '02' },
  { path: '/proyectos', label: 'Proyectos', index: '03' },
  { path: '/proceso', label: 'Proceso', index: '04' },
  { path: '/nosotros', label: 'Nosotros', index: '05' },
  { path: '/contacto', label: 'Contacto', index: '06' },
];

export const WHATSAPP = {
  number: '56 4782 9535',
  link: 'https://wa.me/525647829535?text=' + encodeURIComponent('Hola, me interesa cotizar un proyecto web'),
};
