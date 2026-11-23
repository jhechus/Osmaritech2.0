# Osmaritech — sitio web

Sitio multipágina de Osmaritech (Angular 19 + GSAP/ScrollTrigger). Es una SPA desplegada en Vercel;
`api/log-question.js` es la única función serverless (guarda en Supabase las preguntas que el chatbot no supo responder).

## Comandos

```bash
npm install --legacy-peer-deps
npm start            # http://localhost:4200
npm run build        # dist/osmaritech/browser
```

## Páginas

| Ruta | Contenido | Animaciones destacadas |
|---|---|---|
| `/` | Inicio | Navegador 3D con captura real que se endereza con el scroll, marquesina que reacciona a la velocidad, tarjetas "problema" que se tachan, contadores, tilt |
| `/servicios` | 10 servicios | Índice lateral sticky que resalta el servicio visible |
| `/paquetes` | 4 paquetes + FAQ | Tarjetas con tilt, acordeón |
| `/proyectos` | Chubot | Galería de capturas reales con parallax |
| `/proyectos/chubot` | Caso de estudio | Chat de Telegram fijado, diagrama que se dibuja, pipeline horizontal, capas de seguridad apiladas |
| `/proceso` | 7 pasos | Scroll horizontal fijado con barra de progreso (vertical en móvil) |
| `/nosotros` | Marca, valores, enfoque | Párrafo que se ilumina con el scroll, anillos del logo |
| `/contacto` | Formulario EmailJS + WhatsApp | |

## Estructura

```
src/app/
├── data/        # contenido: servicios, paquetes, proceso, FAQ, beneficios, proyectos (Chubot)
├── core/        # chatbot, botón de WhatsApp, MotionService (GSAP), SeoService (meta por ruta)
├── layout/      # header (se oculta al bajar, menú móvil con clip-path), footer, barra de progreso, nav.ts
├── shared/
│   ├── motion/  # useGsap() + directivas: appReveal, appSplitWords, appParallax, appDrawSvg, appCounter, appTilt, appMagnetic
│   ├── ui/      # icon (Lucide), section-heading, chip, next-page
│   └── components/contact-form/   # EmailJS
└── pages/       # una carpeta por ruta, cada una carga lazy
```

El patrón de animación es el mismo que `cv-portfolio/` (ver `.claude/skills/gsap-angular/SKILL.md` en la raíz del workspace).

## Imágenes

`public/images/chubot/*.webp` son capturas reales del panel de Chubot (`oficinavirtual/`) corriendo en modo demo
(base de datos en memoria, sin claves). Para regenerarlas, arranca el backend de `oficinavirtual` sin `.env`
y vuelve a capturar el tablero y la oficina.

## Despliegue

Vercel con `vercel.json` (rewrite de todo a `index.html`). En Vercel configura `SUPABASE_URL` y
`SUPABASE_SERVICE_ROLE_KEY` para `api/log-question.js` (ver `.env.example`).
