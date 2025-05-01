import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, TemplateRef, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

export interface SplitButtonOption {
  label: string;
  action: string;
  icon?: TemplateRef<any>;
}

@Component({
  selector: 'giggly-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss'],
  standalone: false,
  host: {
    '[class.giggly-component]': 'true'
  },
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'scale(0.9) translateY(-10px)'
        }),
        animate('0.2s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        }))
      ]),
      transition(':leave', [
        animate('0.1s ease-out', style({ 
          opacity: 0,
          transform: 'scale(0.9) translateY(-10px)'
        }))
      ])
    ])
  ]
})
export class SplitButtonComponent implements OnInit {
  @Input() label: string = 'Action';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
  @Input() options: SplitButtonOption[] = [];
  @Input() dropPosition: 'down' | 'up' = 'down';
  @Input() dropAlign: 'left' | 'right' = 'left';
  @Input() customColor: string | null = null;

  @Output() onClick = new EventEmitter<Event>();
  @Output() onOptionSelect = new EventEmitter<string>();
  @Output() onDropdownToggle = new EventEmitter<boolean>();

  isOpen: boolean = false;
  customStyle: any = {};
  
  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    this.setCustomColor();
  }
  
  /**
   * Set custom color if provided
   */
  setCustomColor(): void {
    if (this.customColor) {
      // Create custom styles for this specific button instance
      this.customStyle = this.sanitizer.bypassSecurityTrustStyle(
        `--primary-color: ${this.customColor};
         --primary-color-hover: ${this.adjustColor(this.customColor, -10)};
         --primary-color-active: ${this.adjustColor(this.customColor, -15)};
         --primary-color-disabled: ${this.adjustColor(this.customColor, 0, 0.6)};`
      );
    }
  }
  
  /**
   * Helper to darken/lighten colors
   * @param color - Hex color string
   * @param percent - Percentage to darken (negative) or lighten (positive)
   * @param opacity - Optional opacity value
   */
  private adjustColor(color: string, percent: number = 0, opacity?: number): string {
    if (!color) return color;
    
    // Remove # if present
    color = color.replace('#', '');
    
    // Convert to RGB
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    
    // Adjust color
    const adjustValue = (value: number): number => {
      return Math.max(0, Math.min(255, Math.round(value + (value * percent / 100))));
    };
    
    const newR = adjustValue(r);
    const newG = adjustValue(g);
    const newB = adjustValue(b);
    
    // Convert back to hex
    const getHex = (value: number): string => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    const hexColor = `#${getHex(newR)}${getHex(newG)}${getHex(newB)}`;
    
    // Add opacity if provided
    if (opacity !== undefined) {
      return `${hexColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
    }
    
    return hexColor;
  }

  /**
   * Toggle the dropdown menu
   */
  toggleDropdown(event: Event): void {
    event.stopPropagation();
    
    if (this.disabled) {
      return;
    }
    
    this.isOpen = !this.isOpen;
    this.onDropdownToggle.emit(this.isOpen);
  }

  /**
   * Close the dropdown menu
   */
  closeDropdown(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.onDropdownToggle.emit(this.isOpen);
    }
  }

  /**
   * Handle option selection
   */
  selectOption(action: string, event: Event): void {
    event.stopPropagation();
    this.onOptionSelect.emit(action);
    this.closeDropdown();
  }

  /**
   * Close dropdown when clicking elsewhere on the document
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen) {
      const targetElement = event.target as HTMLElement;
      const buttonElement = document.querySelector('.split-button') as HTMLElement;
      
      if (buttonElement && !buttonElement.contains(targetElement)) {
        this.closeDropdown();
      }
    }
  }
}

/**
 * Click Outside Directive to handle detecting clicks outside the dropdown
 */
import { Directive } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: false
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}