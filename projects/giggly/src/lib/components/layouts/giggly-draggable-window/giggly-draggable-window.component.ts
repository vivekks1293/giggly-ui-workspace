import { Component, AfterViewInit , Input, Output, EventEmitter, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'giggly-draggable-window',
  standalone: false,
  templateUrl: './giggly-draggable-window.component.html',
  styleUrl: './giggly-draggable-window.component.scss'
})
export class GigglyDraggableWindowComponent implements OnInit, AfterViewInit  {
  @Input() title: string = 'Giggly Window';
  @Input() width: string = '300px';
  @Input() height: string = 'auto';
  @Output() closed = new EventEmitter<void>();

  isDragging = false;
  startX = 0;
  startY = 0;
  startLeft = 0;
  startTop = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.centerWindow();
  }
  ngAfterViewInit() {
    this.centerWindow();
  }

  centerWindow() {
    const windowEl = this.el.nativeElement.querySelector('.giggly-window');
    if (!windowEl) return;

    // Parse the width (remove 'px' if present)
    const widthValue = parseInt(this.width.replace('px', ''), 10);
    
    // Calculate center position
    const left = (window.innerWidth - widthValue) / 2;
    const top = window.innerHeight / 4; // Center vertically but a bit towards the top

    this.renderer.setStyle(windowEl, 'left', `${left}px`);
    this.renderer.setStyle(windowEl, 'top', `${top}px`);
    this.renderer.setStyle(windowEl, 'position', 'fixed');
  }

  startDrag(event: MouseEvent) {
    const windowEl = this.el.nativeElement.querySelector('.giggly-window');
    if (!windowEl.contains(event.target) || event.target === windowEl) {
      return;
    }

    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    
    const style = window.getComputedStyle(windowEl);
    this.startLeft = parseInt(style.left, 10) || 0;
    this.startTop = parseInt(style.top, 10) || 0;

    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;

    const windowEl = this.el.nativeElement.querySelector('.giggly-window');
    const newLeft = this.startLeft + event.clientX - this.startX;
    const newTop = this.startTop + event.clientY - this.startY;

    this.renderer.setStyle(windowEl, 'left', `${newLeft}px`);
    this.renderer.setStyle(windowEl, 'top', `${newTop}px`);
  }

  @HostListener('document:mouseup')
  stopDrag() {
    this.isDragging = false;
  }

  close() {
    this.closed.emit();
  }
}