import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface SidebarItem {
  label: string;
  route?: string;
  children?: SidebarItem[];
  expanded?: boolean; 
}
@Component({
  selector: 'giggly-navbar-sidebar',
  standalone: false,
  templateUrl: './giggly-navbar-sidebar.component.html',
  styleUrl: './giggly-navbar-sidebar.component.scss'
})
export class GigglyNavbarSidebarComponent {
  @Input() menuItems: SidebarItem[] = [];
  @Input() isOpen: boolean = true;
  @Input() themeColor: 'primary' | 'secondary' = 'primary';
  @Output() onMenuSelect = new EventEmitter<SidebarItem>();

  toggleSubMenu(item: SidebarItem, event: Event) {
    event.stopPropagation();
    item['expanded'] = !item['expanded'];
  }

  handleMenuClick(menuItem: SidebarItem) {
    if (menuItem.route) {
      this.onMenuSelect.emit(menuItem);
    }
  }
}
