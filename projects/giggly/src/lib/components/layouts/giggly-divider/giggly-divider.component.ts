import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-divider',
  standalone: false,
  templateUrl: './giggly-divider.component.html',
  styleUrl: './giggly-divider.component.scss'
})
export class GigglyDividerComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() color: string = 'black';
  @Input() thickness: string = '2px';
  @Input() margin: string = '10px';

  get dividerClass() {
    return this.orientation === 'horizontal' ? 'giggly-divider-horizontal' : 'giggly-divider-vertical';
  }

  get width() {
    return this.orientation === 'horizontal' ? '100%' : this.thickness;
  }

  get height() {
    return this.orientation === 'horizontal' ? this.thickness : '100%';
  }
}
