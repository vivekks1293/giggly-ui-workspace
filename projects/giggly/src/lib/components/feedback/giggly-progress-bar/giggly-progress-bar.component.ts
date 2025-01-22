import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-progress-bar',
  standalone: false,
  templateUrl: './giggly-progress-bar.component.html',
  styleUrl: './giggly-progress-bar.component.scss'
})
export class GigglyProgressBarComponent {
  @Input() value: number = 0;
  @Input() width: number = 0;
  @Input() type: 'linear' | 'circular' = 'linear'; 
  @Input() color: string = 'var(--primary-color, #4caf50)'; 
  @Input() diameter: number = 100;
  linearProgressWidth = "";
  ngOnInit() {
    this.linearProgressWidth = this.width + "px";
  }
}
