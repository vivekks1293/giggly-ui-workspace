import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'giggly-textarea',
  standalone: false,
  templateUrl: './giggly-text-area.component.html',
  styleUrl: './giggly-text-area.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglyTextAreaComponent),
      multi: true,
    },
  ],
})
export class GigglyTextAreaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Enter text';
  @Input() rows: number = 3;
  @Input() maxRows: number = 10; 
  @Input() required: boolean = false;
  @Input() errorMessage: string = 'This field is required';
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  value: string = '';
  isValid: boolean = true;

  onChange = (value: string) => { };
  onTouched = () => { };

  onInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.value = textarea.value;
    this.isValid = !this.required || (this.required && this.value.trim() !== '');
    this.autoResize(textarea);
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  autoResize(textarea: HTMLTextAreaElement): void {
    textarea.style.height = 'auto';
    if (textarea.scrollHeight <= this.maxRows * 20) {
      textarea.style.height = textarea.scrollHeight + 'px';
    } else {
      textarea.style.height = this.maxRows * 20 + 'px';
    }
  }

  writeValue(value: string): void {
    this.value = value || '';
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
