import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-grid-column',
  standalone: false,
  templateUrl: './giggly-grid-col.component.html',
  styleUrl: './giggly-grid-col.component.scss'
})
export class GigglyGridColComponent {
  @Input() field!: string;
  @Input() title!: string;
}
