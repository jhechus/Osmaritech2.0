import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Package } from '../../../models/package.model';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.scss'
})
export class PackageCardComponent {
  @Input() pkg!: Package;
}
