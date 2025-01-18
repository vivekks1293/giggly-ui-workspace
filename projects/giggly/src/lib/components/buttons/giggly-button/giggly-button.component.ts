import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-button',
  standalone: false,
  templateUrl: './giggly-button.component.html',
  styleUrl: './giggly-button.component.scss'
})
export class GigglyButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'playful' = 'primary';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  onClickHandler(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.onClick.emit(event);
  }
}
