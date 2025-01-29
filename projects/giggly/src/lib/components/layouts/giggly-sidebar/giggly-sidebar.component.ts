import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-sidebar',
  standalone: false,
  templateUrl: './giggly-sidebar.component.html',
  styleUrl: './giggly-sidebar.component.scss'
})
export class GigglySidebarComponent {
  @Input() isOpen: boolean = false;
  @Input() position: 'left' | 'right' = 'left';
  @Output() toggle = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }
}
