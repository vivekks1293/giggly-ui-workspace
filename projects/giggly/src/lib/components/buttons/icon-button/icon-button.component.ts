import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-icon-button',
  standalone: false,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() disabled: boolean = false; 
  @Output() onClick = new EventEmitter<Event>();

  onClickHandler(event: Event): void {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}
