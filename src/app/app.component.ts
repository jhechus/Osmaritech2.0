import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from './core/components/chatbot/chatbot.component';
import { WhatsappButtonComponent } from './core/components/whatsapp-button/whatsapp-button.component';
import { MotionService } from './core/motion/motion.service';
import { SeoService } from './core/seo/seo.service';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { ScrollProgressComponent } from './layout/scroll-progress.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollProgressComponent, WhatsappButtonComponent, ChatbotComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip" href="#main">Saltar al contenido</a>
    <app-scroll-progress />
    <app-header style="view-transition-name: site-header" />
    <main id="main"><router-outlet /></main>
    <app-footer />
    <app-whatsapp-button />
    <app-chatbot />
  `,
  styles: `
    .skip { position: fixed; left: 1rem; top: -4rem; z-index: 80; padding: .6rem 1rem; border-radius: .5rem; background: var(--accent); color: var(--bg); transition: top .3s; }
    .skip:focus { top: 1rem; }
    main { display: block; min-height: 100vh; }
  `,
})
export class AppComponent {
  constructor() {
    inject(MotionService);
    inject(SeoService).init();
  }
}
