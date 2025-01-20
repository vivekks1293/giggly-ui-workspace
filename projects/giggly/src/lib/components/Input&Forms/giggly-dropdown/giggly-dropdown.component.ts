import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'giggly-select',
  standalone: false,
  templateUrl: './giggly-dropdown.component.html',
  styleUrl: './giggly-dropdown.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglyDropdownComponent),
      multi: true,
    },
  ],
})
export class GigglyDropdownComponent {
  @Input() options: any[] = []; 
  @Input() placeholder: string = 'Select an option';
  @Input() displayField: string = '';
  @Input() multiple: boolean = false;
  @Input() searchEnabled: boolean = false;
  @Input() disabled: boolean = false;

  @Output() selectionChange = new EventEmitter<any>(); 
  @Output() searchResults = new EventEmitter<any[]>(); 

  selectedValue: any = null;
  filteredOptions: any[] = [];
  isOpen: boolean = false;
  searchQuery: string = '';
  constructor(private eRef: ElementRef) {}
  // ControlValueAccessor methods
  onChange = (value: any) => {};
  onTouched = () => {};

  ngOnInit(): void {
    this.filteredOptions = [...this.options];
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

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectOption(option: any): void {
    if (this.multiple) {
      this.selectedValue = this.selectedValue || [];
      if (this.selectedValue.includes(option)) {
        this.selectedValue = this.selectedValue.filter((item: any) => item !== option);
      } else {
        this.selectedValue.push(option);
      }
    } else {
      this.selectedValue = option;
      this.isOpen = false;
    }
    this.onChange(this.selectedValue);
    this.selectionChange.emit(this.selectedValue); 
  }

  isSelected(option: any): boolean {
    return this.multiple ? this.selectedValue?.includes(option) : this.selectedValue === option;
  }

  filterOptions(): void {
    if (this.displayField) {
      this.filteredOptions = this.options.filter((item: any) =>
        item[this.displayField].toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredOptions = this.options.filter((item: any) =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    this.searchResults.emit(this.filteredOptions);
  }
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
