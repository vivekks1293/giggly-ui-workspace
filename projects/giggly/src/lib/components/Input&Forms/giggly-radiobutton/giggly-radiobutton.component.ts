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
@Input() options: { label: string; value: any; emoji?: string }[] = [];
  @Input() name: string = 'giggly-radio-group';
  @Input() disabled: boolean = false;
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input() wobbleOnHover: boolean = true;
  @Input() bounceOnSelect: boolean = true;
  @Input() showSparkles: boolean = true;
  @Output() valueChange = new EventEmitter<any>();
  @Output() giggle = new EventEmitter<any>(); // New giggly event!

  selectedValue: any = null;
  private gigglyMessages = ['Hehe!', 'Yay!', '✨', 'Woo!', '🎉', 'Nice!'];

  onChange = (value: any) => { };
  onTouched = () => { };

  selectOption(value: any): void {
    if (!this.disabled) {
      this.selectedValue = value;
      this.onChange(value);
      this.valueChange.emit(this.selectedValue);
      
      // Emit a giggly message
      const randomMessage = this.gigglyMessages[Math.floor(Math.random() * this.gigglyMessages.length)];
      this.giggle.emit({ value, message: randomMessage });
      
      // Add bounce effect
      if (this.bounceOnSelect) {
        this.triggerBounce(value);
      }
    }
  }

  private triggerBounce(value: any): void {
    const element = document.querySelector(`input[value="${value}"]`)?.closest('.giggly-radio-label');
    if (element) {
      element.classList.add('bounce-animation');
      setTimeout(() => element.classList.remove('bounce-animation'), 600);
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

  onLabelClick(event: Event): void {
    this.onTouched();
  }

  trackByValue(index: number, option: { label: string; value: any; emoji?: string }): any {
    return option.value;
  }
}
