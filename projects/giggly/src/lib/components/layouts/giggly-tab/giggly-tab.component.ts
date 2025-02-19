import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-tab',
  standalone: false,
  templateUrl: './giggly-tab.component.html',
  styleUrl: './giggly-tab.component.scss'
})
export class GigglyTabComponent {
  @Input() name!: string;
  isActive: boolean = false;
}
