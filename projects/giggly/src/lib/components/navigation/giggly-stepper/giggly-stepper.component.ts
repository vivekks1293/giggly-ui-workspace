import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'giggly-stepper',
  standalone: false,
  templateUrl: './giggly-stepper.component.html',
  styleUrl: './giggly-stepper.component.scss'
})
export class GigglyStepperComponent {
  @Input() steps: { label: string }[] = [];
  @Input() activeStep: number = 0;
  @Output() activeStepChange = new EventEmitter<number>();

  setStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this.activeStep = index;
      this.activeStepChange.emit(this.activeStep);
    }
  }
}
