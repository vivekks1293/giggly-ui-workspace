import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-snackbar',
  standalone: false,
  templateUrl: './giggl-snackbar.component.html',
  styleUrl: './giggl-snackbar.component.scss'
})
export class GigglSnackbarComponent {
  @Input() message: string = 'This is a snack message!';
  @Input() actionText: string = '';
  @Input() duration: number = 3000; // Default to 3 seconds
  @Input() action: (() => void) | null = null;
  showSnackbar: boolean = false;

  show() {
    this.showSnackbar = true;
    setTimeout(() => {
      this.hide();
    }, this.duration);
  }

  hide() {
    this.showSnackbar = false;
  }

  handleAction() {
    if (this.action) {
      this.action();
    }
    this.hide();
  }
}
