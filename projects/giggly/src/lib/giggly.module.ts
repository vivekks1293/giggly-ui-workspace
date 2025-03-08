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
import { GigglyAlertsComponent } from '../lib/components/feedback/giggly-alerts/giggly-alerts.component';
import { GigglSnackbarComponent } from '../lib/components/feedback/giggl-snackbar/giggl-snackbar.component';
import { GigglyProgressBarComponent } from '../lib/components/feedback/giggly-progress-bar/giggly-progress-bar.component';
import { GigglyCardComponent } from '../lib/components/layouts/giggly-card/giggly-card.component';
import { GigglyModalComponent } from '../lib/components/layouts/giggly-modal/giggly-modal.component';
import { GigglyAccordianComponent } from '../lib/components/layouts/giggly-accordian/giggly-accordian.component';
import { GigglyTabsComponent } from '../lib/components/layouts/giggly-tabs/giggly-tabs.component';
import { GigglyTabComponent } from '../lib/components/layouts/giggly-tab/giggly-tab.component';
import { GigglySidebarComponent } from '../lib/components/layouts/giggly-sidebar/giggly-sidebar.component';
import { GigglyTooltipComponent } from '../lib/components/layouts/giggly-tooltip/giggly-tooltip.component';
import { GigglyDividerComponent } from '../lib/components/layouts/giggly-divider/giggly-divider.component';
import { BreadcrumbComponent } from '../lib/components/navigation/breadcrumb/breadcrumb.component';
import { GigglyStepperComponent } from '../lib/components/navigation/giggly-stepper/giggly-stepper.component';
import { GigglyNavbarComponent } from '../lib/components/navigation/giggly-navbar/giggly-navbar.component';
import { GigglyNavbarSidebarComponent } from '../lib/components/navigation/giggly-navbar-sidebar/giggly-navbar-sidebar.component';
import { GigglyGridComponent } from '../lib/components/data-display/giggly-grid/giggly-grid.component';
import { GigglyGridColComponent } from '../lib/components/data-display/giggly-grid-col/giggly-grid-col.component';
import { GigglyTreeviewComponent } from '../lib/components/data-display/giggly-treeview/giggly-treeview.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [GigglyTreeviewComponent, GigglyGridColComponent, GigglyGridComponent, GigglyNavbarSidebarComponent, GigglyNavbarComponent, GigglyStepperComponent, BreadcrumbComponent, GigglyDividerComponent, GigglyTooltipComponent, GigglySidebarComponent, GigglyTabComponent, GigglyTabsComponent, GigglyAccordianComponent, GigglyModalComponent, GigglyCardComponent, GigglyProgressBarComponent, GigglSnackbarComponent, GigglyAlertsComponent, GigglyFileUploadComponent, GigglyDatePickerComponent, GigglySliderComponent, GigglySwitchComponent, GigglyDropdownComponent, GigglyRadiobuttonComponent, GigglyCheckboxComponent, GigglyTextAreaComponent, GigglyButtonComponent, IconButtonComponent, GroupButtonComponent, SplitButtonComponent, GigglyTextBoxComponent],
  imports: [RouterModule, CommonModule, FormsModule, BrowserModule], // Import CommonModule here
  exports: [GigglyTreeviewComponent, GigglyGridColComponent, GigglyGridComponent, GigglyNavbarSidebarComponent, GigglyNavbarComponent, GigglyStepperComponent, BreadcrumbComponent, GigglyDividerComponent, GigglyTooltipComponent, GigglySidebarComponent, GigglyTabComponent, GigglyTabsComponent, GigglyAccordianComponent, GigglyModalComponent, GigglyCardComponent, GigglyProgressBarComponent, GigglSnackbarComponent, GigglyAlertsComponent, GigglyFileUploadComponent, GigglyDatePickerComponent, GigglySliderComponent, GigglySwitchComponent, GigglyDropdownComponent, GigglyRadiobuttonComponent, GigglyCheckboxComponent, GigglyTextAreaComponent, GigglyButtonComponent, IconButtonComponent, GroupButtonComponent, SplitButtonComponent, GigglyTextBoxComponent],
})
export class GigglyModule {}
