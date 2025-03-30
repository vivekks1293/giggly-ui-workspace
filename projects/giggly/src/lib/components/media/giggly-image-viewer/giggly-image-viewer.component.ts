import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'giggly-image-viewer',
  standalone: false,
  templateUrl: './giggly-image-viewer.component.html',
  styleUrl: './giggly-image-viewer.component.scss'
})
export class GigglyImageViewerComponent {
  @Input() imageUrl!: string;

  scale = 1;
  translateX = 0;
  translateY = 0;
  isDragging = false;
  startX = 0;
  startY = 0;

  zoomIn() {
    this.scale += 0.1;
  }

  zoomOut() {
    this.scale = Math.max(0.1, this.scale - 0.1);
  }

  reset() {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX - this.translateX;
    this.startY = event.clientY - this.translateY;
  }

  @HostListener('window:mouseup')
  stopDrag() {
    this.isDragging = false;
  }

  onDrag(event: MouseEvent) {
    if (this.isDragging) {
      this.translateX = event.clientX - this.startX;
      this.translateY = event.clientY - this.startY;
    }
  }
}
