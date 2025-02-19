import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-modal',
  standalone: false,
  templateUrl: './giggly-modal.component.html',
  styleUrl: './giggly-modal.component.scss'
})
export class GigglyModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() isVisible: boolean = false;
  @Input() width: string = '400px';
  @Input() height: string = 'auto';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }
}
