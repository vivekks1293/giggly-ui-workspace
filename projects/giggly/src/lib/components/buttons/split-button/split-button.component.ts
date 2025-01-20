import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-split-button',
  standalone: false,
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.scss'
})
export class SplitButtonComponent {
  @Input() label: string = 'Action';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
  @Input() options: { label: string; action: string }[] = [];

  @Output() onClick = new EventEmitter<Event>();
  @Output() onOptionSelect = new EventEmitter<string>();

  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(action: string) {
    this.onOptionSelect.emit(action);
    this.isOpen = false;
  }
}
