import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'giggly-tooltip',
  standalone: false,
  templateUrl: './giggly-tooltip.component.html',
  styleUrl: './giggly-tooltip.component.scss'
})
export class GigglyTooltipComponent {
  @Input() content: string = 'Tooltip text';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() trigger: 'hover' | 'click' = 'hover';

  isVisible: boolean = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.trigger === 'hover') {
      this.isVisible = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.trigger === 'hover') {
      this.isVisible = false;
    }
  }

  toggleTooltip() {
    if (this.trigger === 'click') {
      this.isVisible = !this.isVisible;
    }
  }
}
