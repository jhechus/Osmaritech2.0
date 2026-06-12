import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Service } from '../../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() compact = false;
}
