import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'giggly-drag-list',
  standalone: false,
  templateUrl: './giggly-drag-list.component.html',
  styleUrl: './giggly-drag-list.component.scss'
})
export class GigglyDragListComponent {
  @Input() items: string[] = [];
  @Output() itemsChange = new EventEmitter<string[]>();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.itemsChange.emit(this.items);
  }
}
