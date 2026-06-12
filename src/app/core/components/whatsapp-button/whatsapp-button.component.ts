import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      href="https://wa.me/521XXXXXXXXXX?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto%20web"
      target="_blank"
      rel="noopener noreferrer"
      class="wa-btn"
      aria-label="Contactar por WhatsApp"
      title="Contáctanos por WhatsApp"
    >
      <svg class="wa-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="wa-btn__label">WhatsApp</span>
      <span class="wa-btn__pulse"></span>
    </a>
  `,
  styles: [`
    .wa-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 900;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem 1.25rem;
      background: linear-gradient(135deg, #25D366, #128C7E);
      color: #fff;
      border-radius: 50px;
      font-family: var(--font-display);
      font-size: 0.88rem;
      font-weight: 700;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: fixed;
      bottom: 2rem;
      right: 2rem;

      &:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.55);
        color: #fff;
      }

      &:active {
        transform: translateY(-1px) scale(1.01);
      }

      @media (max-width: 480px) {
        padding: 0.75rem;
        border-radius: 50%;
        bottom: 1.25rem;
        right: 1.25rem;
      }
    }

    .wa-btn__icon {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
    }

    .wa-btn__label {
      @media (max-width: 480px) {
        display: none;
      }
    }

    .wa-btn__pulse {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 12px;
      height: 12px;
      background: #fff;
      border-radius: 50%;
      animation: waPulse 2s ease-in-out infinite;
    }

    @keyframes waPulse {
      0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
      50% { transform: scale(1.2); opacity: 0.8; box-shadow: 0 0 0 6px rgba(255,255,255,0); }
    }
  `]
})
export class WhatsappButtonComponent {}
