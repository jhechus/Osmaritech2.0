import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FAQS } from '../../../data/faqs.data';
import { SERVICES } from '../../../data/services.data';
import { PACKAGES } from '../../../data/packages.data';

interface ChatCta {
  label: string;
  type: 'route' | 'whatsapp';
  value: string;
}

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
  cta?: ChatCta[];
}

interface KnowledgeEntry {
  keywords: string[];
  answer: string;
  cta?: ChatCta[];
}

const WA_LINK = 'https://wa.me/525647829535?text=' + encodeURIComponent('Hola, tengo una pregunta sobre sus servicios');

function stripDiacritics(str: string): string {
  return Array.from(str)
    .filter(ch => {
      const code = ch.charCodeAt(0);
      return code < 0x0300 || code > 0x036f;
    })
    .join('');
}

function normalize(str: string): string {
  return stripDiacritics(str.toLowerCase().normalize('NFD'))
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const FAQ_KEYWORDS: string[][] = [
  ['tarda', 'tiempo', 'cuanto tiempo', 'dias', 'semanas', 'entrega', 'demora'],
  ['cambios', 'despues de publicar', 'modificar', 'ajustes', 'actualizar contenido', 'editar la pagina'],
  ['celular', 'movil', 'responsive', 'tablet', 'pantalla'],
  ['dominio y hosting', 'ayudar con dominio', 'configurar dominio', 'ayuda con hosting'],
  ['sistema personalizado', 'sistemas personalizados', 'a la medida', 'proceso interno', 'app para mi negocio'],
  ['publicidad', 'redes sociales', 'marketing', 'manejo de redes', 'ads', 'anuncios'],
  ['correo con mi dominio', 'correo profesional', 'email con mi dominio', 'correo empresarial']
];

const SERVICE_KEYWORDS: Record<string, string[]> = {
  'diseno-desarrollo-web': ['diseno web', 'desarrollo web', 'pagina web profesional', 'crear una pagina', 'hacer una pagina'],
  'paginas-negocios': ['pagina para negocio', 'pagina para mi negocio', 'negocio local', 'pagina de negocio'],
  'landing-pages': ['landing', 'landing page', 'pagina de venta', 'pagina para vender'],
  'rediseno': ['rediseno', 'renovar pagina', 'pagina vieja', 'modernizar pagina', 'actualizar diseno', 'mi pagina se ve mal'],
  'mantenimiento': ['mantenimiento', 'soporte tecnico', 'mantener la pagina', 'mi pagina tiene errores'],
  'seo-tecnico': ['seo', 'posicionamiento', 'aparecer en google', 'buscadores'],
  'google-business': ['google business', 'google maps', 'perfil de negocio', 'ficha de google', 'aparecer en google maps'],
  'sistemas-web': ['sistema web', 'panel administrativo', 'sistema personalizado', 'herramienta digital'],
  'automatizacion': ['automatizacion', 'automatizar', 'procesos automaticos', 'tareas repetitivas'],
  'hosting-dominio': ['hosting', 'alojamiento', 'certificado ssl', 'dominio']
};

const PACKAGE_KEYWORDS: Record<string, string[]> = {
  'presencia-web': ['paquete presencia web', 'pagina informativa', 'paquete basico'],
  'landing-venta': ['paquete landing', 'paquete de venta', 'paquete para vender'],
  'web-mantenimiento': ['paquete mantenimiento', 'web mas mantenimiento', 'paquete con soporte'],
  'sistema-web': ['paquete sistema', 'paquete de sistema web']
};

const STATIC_ENTRIES: KnowledgeEntry[] = [
  {
    keywords: ['hola', 'buenas', 'buen dia', 'buenas tardes', 'buenas noches', 'que tal', 'hey', 'saludos'],
    answer: '¡Hola! 👋 Soy el asistente virtual de Osmaritech. Puedo ayudarte con información sobre servicios, paquetes, tiempos y proceso de trabajo. ¿En qué te puedo ayudar?'
  },
  {
    keywords: ['gracias', 'muchas gracias', 'genial gracias'],
    answer: '¡De nada! Si tienes otra duda aquí estoy. Si prefieres hablar directo con nosotros, usa el botón de WhatsApp.'
  },
  {
    keywords: ['adios', 'hasta luego', 'nos vemos', 'bye'],
    answer: '¡Hasta pronto! Cuando quieras retomar la conversación aquí estaré, o puedes escribirnos por WhatsApp.'
  },
  {
    keywords: [
      'precio', 'costo', 'cuanto cuesta', 'cuanto sale', 'tarifa', 'cotizacion', 'presupuesto',
      'pesos', 'dolares', 'usd', 'mxn', 'con cuanto', 'me alcanza', 'que me recomiendan con'
    ],
    answer: 'No manejamos una tarifa fija publicada porque el costo varía según el alcance del proyecto (secciones, funcionalidades, etc). Cuéntanos tu presupuesto aproximado por WhatsApp y te decimos qué opción se ajusta mejor — el paquete Presencia Web o una Landing de Venta suelen ser el punto de entrada más accesible.',
    cta: [
      { label: 'Ver paquetes', type: 'route', value: '/paquetes' },
      { label: 'Cotizar por WhatsApp', type: 'whatsapp', value: WA_LINK }
    ]
  },
  {
    keywords: ['contacto', 'telefono', 'numero', 'whatsapp', 'correo', 'email', 'como los contacto', 'como contactarlos'],
    answer: 'Puedes escribirnos directo por WhatsApp al 56 4782 9535, o llenar el formulario en nuestra página de Contacto y te respondemos en cuanto estemos disponibles.',
    cta: [
      { label: 'Ir a Contacto', type: 'route', value: '/contacto' },
      { label: 'Abrir WhatsApp', type: 'whatsapp', value: WA_LINK }
    ]
  },
  {
    keywords: ['proceso', 'como trabajan', 'como es el proceso', 'pasos', 'metodologia'],
    answer: 'Trabajamos por etapas: entendemos tu negocio y objetivos, definimos estructura y contenido, diseñamos, desarrollamos y revisamos contigo antes de publicar. Puedes ver el detalle en la sección Proceso.',
    cta: [{ label: 'Ver proceso', type: 'route', value: '/proceso' }]
  },
  {
    keywords: ['quienes son', 'sobre ustedes', 'sobre osmaritech', 'quien es osmaritech', 'nosotros'],
    answer: 'Osmaritech es una marca enfocada en desarrollo web, sistemas y mantenimiento técnico para negocios que quieren una presencia digital profesional. Conócenos más en la sección Nosotros.',
    cta: [{ label: 'Conócenos', type: 'route', value: '/nosotros' }]
  },
  {
    keywords: ['proyectos', 'portafolio', 'ejemplos', 'trabajos anteriores', 'ver trabajos'],
    answer: 'Sí, puedes ver ejemplos de proyectos realizados en la sección de Proyectos.',
    cta: [{ label: 'Ver proyectos', type: 'route', value: '/proyectos' }]
  },
  {
    keywords: ['paquetes', 'que paquetes tienen', 'planes', 'opciones de paquete'],
    answer: 'Tenemos 4 paquetes: Presencia Web, Landing de Venta, Web + Mantenimiento y Sistema Web. Cada uno pensado para una necesidad distinta. Puedes ver el detalle completo de cada uno en la sección Paquetes.',
    cta: [{ label: 'Ver paquetes', type: 'route', value: '/paquetes' }]
  },
  {
    keywords: ['servicios', 'que servicios tienen', 'que hacen', 'que ofrecen'],
    answer: 'Ofrecemos diseño y desarrollo web, landing pages, rediseño de sitios, mantenimiento técnico, SEO básico, presencia en Google Business, sistemas web personalizados y automatización de procesos.',
    cta: [{ label: 'Ver servicios', type: 'route', value: '/servicios' }]
  }
];

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements AfterViewChecked {
  @ViewChild('messagesEl') private messagesEl?: ElementRef<HTMLDivElement>;

  isOpen = false;
  isTyping = false;
  inputValue = '';
  messages: ChatMessage[] = [];

  suggestions = [
    '¿Cuánto tarda un proyecto?',
    '¿Qué paquetes tienen?',
    '¿Hacen sistemas personalizados?',
    'Quiero contactarlos'
  ];

  private knowledge: KnowledgeEntry[] = [
    ...STATIC_ENTRIES,
    ...FAQS.map((f, i) => ({ keywords: FAQ_KEYWORDS[i] ?? [], answer: f.answer })),
    ...SERVICES.map(s => ({
      keywords: [s.title.toLowerCase(), ...(SERVICE_KEYWORDS[s.id] ?? [])],
      answer: `${s.title}: ${s.description} Incluye: ${s.features.slice(0, 3).join(', ')}, entre otros.`,
      cta: [{ label: 'Ver servicios', type: 'route' as const, value: '/servicios' }]
    })),
    ...PACKAGES.map(p => ({
      keywords: [p.name.toLowerCase(), ...(PACKAGE_KEYWORDS[p.id] ?? [])],
      answer: `${p.name} — ${p.tagline}. ${p.description}`,
      cta: [{ label: 'Ver paquetes', type: 'route' as const, value: '/paquetes' }]
    }))
  ].map(entry => ({ ...entry, keywords: entry.keywords.map(normalize) }));

  constructor(private router: Router) {}

  ngAfterViewChecked(): void {
    if (this.messagesEl) {
      this.messagesEl.nativeElement.scrollTop = this.messagesEl.nativeElement.scrollHeight;
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.messages.push({
        from: 'bot',
        text: 'Hola, soy el asistente virtual de Osmaritech 👋 Estoy aquí para responderte aunque en este momento no haya nadie en línea. ¿Qué te gustaría saber?'
      });
    }
  }

  close(): void {
    this.isOpen = false;
  }

  sendSuggestion(text: string): void {
    this.send(text);
  }

  send(text?: string): void {
    const content = (text ?? this.inputValue).trim();
    if (!content || this.isTyping) return;

    this.messages.push({ from: 'user', text: content });
    this.inputValue = '';
    this.isTyping = true;

    const delay = 500 + Math.random() * 500;
    setTimeout(() => {
      const { text: answer, cta, matched } = this.findAnswer(content);
      this.messages.push({ from: 'bot', text: answer, cta });
      this.isTyping = false;
      if (!matched) {
        this.logUnanswered(content);
      }
    }, delay);
  }

  private logUnanswered(question: string): void {
    fetch('/api/log-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, page: window.location.pathname })
    }).catch(() => {});
  }

  onCta(cta: ChatCta): void {
    if (cta.type === 'whatsapp') {
      window.open(cta.value, '_blank', 'noopener,noreferrer');
    } else {
      this.router.navigateByUrl(cta.value);
      this.isOpen = false;
    }
  }

  private findAnswer(raw: string): { text: string; cta?: ChatCta[]; matched: boolean } {
    const msg = normalize(raw);
    let bestEntry: KnowledgeEntry | null = null;
    let bestScore = 0;

    for (const entry of this.knowledge) {
      let score = 0;
      for (const kw of entry.keywords) {
        if (kw && msg.includes(kw)) {
          score += kw.split(' ').length;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    }

    if (bestEntry && bestScore > 0) {
      return { text: bestEntry.answer, cta: bestEntry.cta, matched: true };
    }

    return {
      matched: false,
      text: 'No tengo una respuesta exacta para eso todavía 🤔 Te recomiendo escribirnos directo por WhatsApp o dejar tu mensaje en el formulario de contacto, y con gusto te ayudamos en cuanto estemos disponibles.',
      cta: [
        { label: 'Escribir por WhatsApp', type: 'whatsapp', value: WA_LINK },
        { label: 'Ir a Contacto', type: 'route', value: '/contacto' }
      ]
    };
  }
}
