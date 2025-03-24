import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-chips',
  standalone: false,
  templateUrl: './giggly-chips.component.html',
  styleUrl: './giggly-chips.component.scss'
})
export class GigglyChipsComponent {
  @Input() label: string = '';
  @Input() removable: boolean = false;
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';
  @Output() removed = new EventEmitter<void>();

  remove() {
    this.removed.emit();
  }
}
