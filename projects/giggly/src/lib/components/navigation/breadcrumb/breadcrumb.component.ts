import {  Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-breadcrumb',
  standalone: false,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: { label: string; url?: string }[] = [];
  @Output() breadcrumbClick = new EventEmitter<string>();

  handleClick(index: number, isLast: boolean) {
    if (!isLast) {
      const fullPath = this.breadcrumbs
        .slice(0, index + 1)
        .map(breadcrumb => breadcrumb.url)
        .filter(url => url)
        .join('');
      this.breadcrumbClick.emit(fullPath);
    }
  }
}
