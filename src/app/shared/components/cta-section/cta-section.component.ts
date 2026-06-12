import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {
  @Input() headline = '¿Tu negocio ya está listo para verse más profesional en internet?';
  @Input() subheadline = 'Cuéntame qué necesitas y encontramos la solución adecuada para tu negocio.';
  @Input() primaryLabel = 'Hablemos de tu proyecto';
  @Input() primaryLink = '/contacto';
  @Input() secondaryLabel = 'Ver servicios';
  @Input() secondaryLink = '/servicios';
  @Input() showSecondary = true;
}
