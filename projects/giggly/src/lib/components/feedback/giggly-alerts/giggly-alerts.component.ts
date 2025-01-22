import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'giggly-alert',
  standalone: false,
  templateUrl: './giggly-alerts.component.html',
  styleUrl: './giggly-alerts.component.scss'
})
export class GigglyAlertsComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'warning' | 'error' | 'info' = 'info';
  @Input() dismissible: boolean = true;

  showAlert: boolean = true;

  closeAlert() {
    this.showAlert = false;
  }
}
