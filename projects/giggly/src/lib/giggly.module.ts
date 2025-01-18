import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { GigglyButtonComponent } from '../lib/components/buttons/giggly-button/giggly-button.component';

@NgModule({
  declarations: [GigglyButtonComponent],
  imports: [CommonModule], // Import CommonModule here
  exports: [GigglyButtonComponent],
})
export class GigglyModule {}
