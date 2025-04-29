import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-button',
  standalone: false,
  templateUrl: './giggly-button.component.html',
  styleUrl: './giggly-button.component.scss'
})
export class GigglyButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'playful' | 'danger' | 'bubbly' | 'bouncy' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  onClickHandler(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    
    // Add confetti effect for playful and bubbly buttons
    if (this.variant === 'playful' || this.variant === 'bubbly') {
      this.createRippleEffect(event as MouseEvent);
    }
    
    this.onClick.emit(event);
  }

  private createRippleEffect(event: MouseEvent): void {
    const button = event.currentTarget as HTMLElement;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${event.clientY - (button.getBoundingClientRect().top + radius)}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
}