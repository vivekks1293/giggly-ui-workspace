import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-button-group',
  standalone: false,
  templateUrl: './group-button.component.html',
  styleUrl: './group-button.component.scss'
})
export class GroupButtonComponent {
  @Input() buttons: { 
    label?: string; // Make the label property optional
    icon?: string; // Icon is optional
    variant: string; 
    disabled?: boolean; 
  }[] = [];

  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
}
