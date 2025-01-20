import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'giggly-slider',
  standalone: false,
  templateUrl: './giggly-slider.component.html',
  styleUrl: './giggly-slider.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglySliderComponent),
      multi: true,
    },
  ],
})
export class GigglySliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() label: string = 'Giggly Slider';
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<number>();

  value: number = 0;

  onChange = (value: number) => {};
  onTouched = () => {};

  writeValue(value: number): void {
    this.value = value;
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

  updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = Number(input.value);
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
}
