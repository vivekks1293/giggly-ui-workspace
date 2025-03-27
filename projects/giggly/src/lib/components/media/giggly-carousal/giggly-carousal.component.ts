import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-carousal',
  standalone: false,
  templateUrl: './giggly-carousal.component.html',
  styleUrl: './giggly-carousal.component.scss'
})
export class GigglyCarousalComponent {
  @Input() items: any[] = [];
  @Input() autoSlide: boolean = true;
  @Input() slideInterval: number = 3000;

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    if (this.autoSlide && Array.isArray(this.items) && this.items.length > 0) {
      // this.intervalId = setInterval(() => this.next(), this.slideInterval);
    }
  }

  // ngOnDestroy() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  next() {
    if (!this.items?.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    if (!this.items?.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  goTo(index: number) {
    if (!this.items?.length || index < 0 || index >= this.items.length) return;
    this.currentIndex = index;
  }
}
