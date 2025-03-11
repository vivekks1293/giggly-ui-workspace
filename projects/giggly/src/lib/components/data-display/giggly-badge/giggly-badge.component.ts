import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-badge',
  standalone: false,
  templateUrl: './giggly-badge.component.html',
  styleUrl: './giggly-badge.component.scss'
})
export class GigglyBadgeComponent {
  @Input() value: string | number = '';
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';
}
