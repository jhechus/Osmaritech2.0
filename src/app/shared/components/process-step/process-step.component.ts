import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStep } from '../../../models/process-step.model';

@Component({
  selector: 'app-process-step',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="step" [class.step--last]="isLast">
      <div class="step__connector">
        <div class="step__num">{{ step.number }}</div>
        @if (!isLast) {
          <div class="step__line"></div>
        }
      </div>
      <div class="step__content">
        <div class="step__icon-wrap">
          <span class="step__icon">{{ step.icon }}</span>
        </div>
        <h3 class="step__title">{{ step.title }}</h3>
        <p class="step__desc">{{ step.description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .step {
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 1.5rem;
      position: relative;
    }

    .step__connector {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    .step__num {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(0, 207, 255, 0.08);
      border: 1px solid rgba(0, 207, 255, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 500;
      color: var(--accent-cyan);
      letter-spacing: 0.05em;
      flex-shrink: 0;
      z-index: 1;
      transition: all var(--transition-base);
    }

    .step:hover .step__num {
      background: rgba(0, 207, 255, 0.15);
      border-color: rgba(0, 207, 255, 0.5);
      box-shadow: 0 0 20px rgba(0, 207, 255, 0.2);
    }

    .step__line {
      width: 1px;
      flex: 1;
      min-height: 2rem;
      background: linear-gradient(to bottom, rgba(0,207,255,0.2), rgba(0,207,255,0.05));
      margin-top: 4px;
    }

    .step__content {
      padding-bottom: 2.5rem;
    }

    .step--last .step__content {
      padding-bottom: 0;
    }

    .step__icon-wrap {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-sm);
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.85rem;
      font-size: 1.1rem;
      color: var(--accent-violet);
    }

    .step__title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .step__desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.7;
      max-width: 520px;
    }
  `]
})
export class ProcessStepComponent {
  @Input() step!: ProcessStep;
  @Input() isLast = false;
}
