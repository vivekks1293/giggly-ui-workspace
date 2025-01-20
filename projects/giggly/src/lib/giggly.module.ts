import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { GigglyButtonComponent } from '../lib/components/buttons/giggly-button/giggly-button.component';
import { IconButtonComponent } from '../lib/components/buttons/icon-button/icon-button.component';
import { GroupButtonComponent } from '../lib/components/buttons/group-button/group-button.component';
import { SplitButtonComponent } from '../lib/components/buttons/split-button/split-button.component';
import { GigglyTextBoxComponent } from '../lib/components/Input&Forms/giggly-text-box/giggly-text-box.component';
import { GigglyTextAreaComponent } from '../lib/components/Input&Forms/giggly-text-area/giggly-text-area.component';
import { GigglyCheckboxComponent } from '../lib/components/Input&Forms/giggly-checkbox/giggly-checkbox.component';
import { GigglyRadiobuttonComponent } from '../lib/components/Input&Forms/giggly-radiobutton/giggly-radiobutton.component';
import { GigglyDropdownComponent } from '../lib/components/Input&Forms/giggly-dropdown/giggly-dropdown.component';
import { GigglySwitchComponent } from '../lib/components/Input&Forms/giggly-switch/giggly-switch.component';
import { GigglySliderComponent } from '../lib/components/Input&Forms/giggly-slider/giggly-slider.component';
import { GigglyDatePickerComponent } from '../lib/components/Input&Forms/giggly-date-picker/giggly-date-picker.component';
import { GigglyFileUploadComponent } from '../lib/components/Input&Forms/giggly-file-upload/giggly-file-upload.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [GigglyFileUploadComponent, GigglyDatePickerComponent, GigglySliderComponent, GigglySwitchComponent, GigglyDropdownComponent, GigglyRadiobuttonComponent, GigglyCheckboxComponent, GigglyTextAreaComponent, GigglyButtonComponent, IconButtonComponent, GroupButtonComponent, SplitButtonComponent, GigglyTextBoxComponent],
  imports: [CommonModule, FormsModule, BrowserModule], // Import CommonModule here
  exports: [GigglyFileUploadComponent, GigglyDatePickerComponent, GigglySliderComponent, GigglySwitchComponent, GigglyDropdownComponent, GigglyRadiobuttonComponent, GigglyCheckboxComponent, GigglyTextAreaComponent, GigglyButtonComponent, IconButtonComponent, GroupButtonComponent, SplitButtonComponent, GigglyTextBoxComponent],
})
export class GigglyModule {}
