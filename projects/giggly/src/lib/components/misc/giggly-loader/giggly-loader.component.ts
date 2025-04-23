import { Component, Input  } from '@angular/core';

@Component({
  selector: 'giggly-loader',
  standalone: false,
  templateUrl: './giggly-loader.component.html',
  styleUrl: './giggly-loader.component.scss'
})
export class GigglyLoaderComponent {
  @Input() type: 'dots' | 'ring' | 'bubbles' = 'dots';
  @Input() size: string = '40px';
  @Input() color: string = 'var(--primary-color, #0a66c2)';
}
