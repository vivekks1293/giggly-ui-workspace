import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
@Component({
  selector: 'giggly-context-menu',
  standalone: false,
  templateUrl: './giggly-context-menu.component.html',
  styleUrl: './giggly-context-menu.component.scss'
})
export class GigglyContextMenuComponent {
  @Input() items: { label: string, icon?: string, action: string }[] = [];
  @Output() itemSelected = new EventEmitter<string>();

  isVisible = false;
  posX = 0;
  posY = 0;

  open(x: number, y: number) {
    this.posX = x;
    this.posY = y;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  selectItem(action: string) {
    this.itemSelected.emit(action);
    this.close();
  }

  @HostListener('document:click')
  onOutsideClick() {
    this.close();
  }
}
