import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'giggly-toggle',
  standalone: false,
  templateUrl: './giggly-switch.component.html',
  styleUrl: './giggly-switch.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglySwitchComponent),
      multi: true,
    },
  ],
})
export class GigglySwitchComponent {
  @Input() checked: boolean = false;  // Initial state
  @Input() label: string = '';  // Optional label
  @Input() disabled: boolean = false;  // Disable toggle switch

  @Output() toggleChange = new EventEmitter<boolean>();

  onChange = (value: boolean) => {};
  onTouched = () => {};

  toggleSwitch(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onChange(this.checked);
      this.toggleChange.emit(this.checked);
    }
  }

  writeValue(value: boolean): void {
    this.checked = value;
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
