import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'giggly-radio-group',
  standalone: false,
  templateUrl: './giggly-radiobutton.component.html',
  styleUrl: './giggly-radiobutton.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglyRadiobuttonComponent),
      multi: true,
    },
  ],
})
export class GigglyRadiobuttonComponent {
  @Input() options: { label: string; value: any }[] = [];  // Radio button options
  @Input() name: string = 'giggly-radio-group';  // Radio button group name
  @Input() disabled: boolean = false;  // Disable the radio group
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';  // Layout direction

  @Output() valueChange = new EventEmitter<any>();

  selectedValue: any = null;

  // ControlValueAccessor functions
  onChange = (value: any) => { };
  onTouched = () => { };

  selectOption(value: any): void {
    if (!this.disabled) {
      this.selectedValue = value;
      this.onChange(value);
      this.valueChange.emit(this.selectedValue);
    }
  }

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
