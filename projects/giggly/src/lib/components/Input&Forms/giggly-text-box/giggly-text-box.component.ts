import { Component, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef } from '@angular/core';
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
export class GigglyTextBoxComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = 'Enter text';
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' = 'text';
  @Input() required: boolean = false;
  @Input() errorMessage: string = 'This field is required';
  @Input() disabled: boolean = false;
  @Input() maxLength: number = 100;
  @Input() showCharCount: boolean = false;
  @Input() pattern: string = '';
  @Input() gigglyLevel: 'low' | 'medium' | 'high' = 'medium';

  @ViewChild('inputElement') inputElement!: ElementRef;
  
  value: string = ''; // Holds the input's value
  isValid: boolean = true;
  isJiggling: boolean = false;
  isFocused: boolean = false;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() focusChange = new EventEmitter<boolean>();
  @Output() validityChange = new EventEmitter<boolean>();

  // Callback functions for ControlValueAccessor
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Focus management
  onFocus(): void {
    this.isFocused = true;
    this.focusChange.emit(true);
    this.onTouched();
    
    // Play a happy giggle sound if gigglyLevel is high
    if (this.gigglyLevel === 'high') {
      // this.playGiggleSound('focus');
    }
  }
  
  onBlur(): void {
    this.isFocused = false;
    this.focusChange.emit(false);
    
    // Validate on blur
    this.validateInput(this.value);
  }
  
  // Handles input changes
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    
    // Validate input
    this.validateInput(inputValue);
    
    // Trigger callbacks
    this.onChange(this.value); // Notify Angular forms
    this.valueChange.emit(this.value); // Notify parent component
    
    // Giggle effects based on input
    if (this.gigglyLevel !== 'low') {
      if (inputValue.length % 10 === 0 && inputValue.length > 0) {
        this.triggerJiggle();
      }
    }
  }
  
  // Validation function
  validateInput(value: string): void {
    let isCurrentlyValid = true;
    
    // Required validation
    if (this.required && value.trim() === '') {
      isCurrentlyValid = false;
    }
    
    // Pattern validation if provided
    if (isCurrentlyValid && this.pattern && value.trim() !== '') {
      const regex = new RegExp(this.pattern);
      isCurrentlyValid = regex.test(value);
    }
    
    // Length validation if maxLength provided
    if (isCurrentlyValid && this.maxLength > 0 && value.length > this.maxLength) {
      isCurrentlyValid = false;
    }
    
    // If validity changed, emit event and possibly trigger effects
    if (this.isValid !== isCurrentlyValid) {
      this.isValid = isCurrentlyValid;
      this.validityChange.emit(this.isValid);
      
      if (!this.isValid && this.gigglyLevel !== 'low') {
        this.triggerJiggle();
        
        if (this.gigglyLevel === 'high') {
          // this.playGiggleSound('invalid');
        }
      }
    }
  }
  
  // Fun effects
  triggerJiggle(): void {
    this.isJiggling = true;
    setTimeout(() => {
      this.isJiggling = false;
    }, 500);
  }
  
  playGiggleSound(type: 'focus' | 'invalid' | 'valid'): void {
    console.log(`Playing ${type} giggle sound`);
  }
  
  focus(): void {
    if (this.inputElement && !this.disabled) {
      this.inputElement.nativeElement.focus();
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
    this.validateInput(this.value);
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