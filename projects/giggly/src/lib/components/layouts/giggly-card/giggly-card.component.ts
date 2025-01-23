import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-card',
  standalone: false,
  templateUrl: './giggly-card.component.html',
  styleUrl: './giggly-card.component.scss'
})
export class GigglyCardComponent {
  @Input() header: string = '';
  @Input() footer: string = '';
  @Input() borderColor: string = 'var(--primary-color, #4caf50)';
  @Input() width: string = '400px';
  @Input() height: string = 'auto';
  @Input() scrollable: boolean = false;
}
