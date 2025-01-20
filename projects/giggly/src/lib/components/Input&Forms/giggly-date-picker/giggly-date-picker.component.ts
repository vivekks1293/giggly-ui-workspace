import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'giggly-date-picker',
  standalone: false,
  templateUrl: './giggly-date-picker.component.html',
  styleUrl: './giggly-date-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglyDatePickerComponent),
      multi: true,
    },
  ],
})
export class GigglyDatePickerComponent implements ControlValueAccessor  {
  @Input() label: string = 'Select Date';
  @Input() minDate: Date | null = null;
  @Input() maxDate: Date | null = null;
  @Input() disabled: boolean = false;

  @Output() dateChange = new EventEmitter<Date | any>();

  private _value: Date | null = null;
  onChange: (value: Date | null) => void = () => {};
  onTouched: () => void = () => {};

  get value(): Date | null {
    return this._value;
  }

  set value(value: Date | null) {
    this._value = value;
    this.onChange(this._value);
    this.dateChange.emit(this._value);
  }

  writeValue(value: Date | null): void {
    this._value = value;
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onDateSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value ? new Date(input.value) : null;
  }

  getFormattedDate(date: Date | null): string {
    return date ? date.toISOString().split('T')[0] : '';
  }

}
