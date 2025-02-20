import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface MenuItem {
  label: string;
  route?: string;
  children?: MenuItem[];
}
@Component({
  selector: 'giggly-navbar',
  standalone: false,
  templateUrl: './giggly-navbar.component.html',
  styleUrl: './giggly-navbar.component.scss'
})
export class GigglyNavbarComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() sticky: boolean = false;
  @Input() themeColor: 'primary' | 'secondary' = 'primary';
  @Output() onMenuSelect = new EventEmitter<MenuItem>();

  handleMenuClick(menuItem: MenuItem) {
    if (menuItem.route) {
      this.onMenuSelect.emit(menuItem);
    }
  }
}
