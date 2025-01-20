import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'giggly-text-box',
  standalone: false,
  templateUrl: './giggly-text-box.component.html',
  styleUrl: './giggly-text-box.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglyTextBoxComponent),
      multi: true,
    },
  ],
})
export class GigglyTextBoxComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Enter text';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() required: boolean = false;
  @Input() errorMessage: string = 'This field is required';
  @Input() disabled: boolean = false;

  value: string = ''; // Holds the input's value
  isValid: boolean = true;

  @Output() valueChange = new EventEmitter<string>();

  // Callback functions for ControlValueAccessor
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Handles input changes
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.isValid = !this.required || (this.required && inputValue.trim() !== '');
    this.onChange(this.value); // Notify Angular forms
    this.valueChange.emit(this.value); // Notify parent component
  }

  // Writes a new value from the model to the view
  writeValue(value: string): void {
    this.value = value;
  }

  // Registers a callback function for when the value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Registers a callback function for when the control is touched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Handles the disabled state
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
