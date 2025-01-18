import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { GigglyButtonComponent } from '../lib/components/buttons/giggly-button/giggly-button.component';
import { IconButtonComponent } from '../lib/components/buttons/icon-button/icon-button.component';

@NgModule({
  declarations: [GigglyButtonComponent, IconButtonComponent],
  imports: [CommonModule], // Import CommonModule here
  exports: [GigglyButtonComponent, IconButtonComponent],
})
export class GigglyModule {}
