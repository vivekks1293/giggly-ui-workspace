import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-accordion',
  standalone: false,
  templateUrl: './giggly-accordian.component.html',
  styleUrl: './giggly-accordian.component.scss'
})
export class GigglyAccordianComponent {
  @Input() title: string = 'Accordion Title';
  @Input() isExpanded: boolean = false;

  toggleAccordion() {
    this.isExpanded = !this.isExpanded;
  }
}
