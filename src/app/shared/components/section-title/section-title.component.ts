import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-title" [class.section-title--center]="center">
      @if (badge) {
        <span class="badge badge--cyan section-title__badge">
          <span>◎</span> {{ badge }}
        </span>
      }
      <h2 class="section-title__heading">
        {{ headline }}
        @if (accentWord) {
          <span class="gradient-text"> {{ accentWord }}</span>
        }
      </h2>
      @if (subheading) {
        <p class="section-title__sub">{{ subheading }}</p>
      }
      <div class="section-title__line">
        <span class="glow-line"></span>
      </div>
    </div>
  `,
  styles: [`
    .section-title {
      margin-bottom: 3.5rem;
      max-width: 680px;

      &--center {
        text-align: center;
        margin-left: auto;
        margin-right: auto;

        .section-title__line {
          justify-content: center;
        }
      }
    }

    .section-title__badge {
      margin-bottom: 1rem;
    }

    .section-title__heading {
      margin-bottom: 0.85rem;
      line-height: 1.15;
    }

    .section-title__sub {
      font-size: 1.05rem;
      color: var(--text-secondary);
      line-height: 1.7;
      max-width: 580px;
      margin-bottom: 1.25rem;
    }

    .section-title__line {
      display: flex;
    }
  `]
})
export class SectionTitleComponent {
  @Input() badge = '';
  @Input() headline = '';
  @Input() accentWord = '';
  @Input() subheading = '';
  @Input() center = false;
}
