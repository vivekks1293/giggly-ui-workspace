import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
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
export class GigglyTextAreaComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('textareaElement') textareaElement!: ElementRef;
  
  @Input() label: string = '';
  @Input() placeholder: string = 'Enter text';
  @Input() rows: number = 3;
  @Input() maxRows: number = 10;
  @Input() required: boolean = false;
  @Input() errorMessage: string = 'This field is required';
  @Input() disabled: boolean = false;
  @Input() giggleLevel: 'low' | 'medium' | 'high' = 'medium';
  @Input() giggleSounds: boolean = true;
  @Input() giggleAnimation: boolean = true;
  @Input() giggleColors: boolean = true;
  @Input() giggleEmojis: string[] = ['😄', '😆', '🤭', '😂', '🥳'];
  @Input() confettiOnComplete: boolean = false;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() giggleTriggered = new EventEmitter<void>();

  value: string = '';
  isValid: boolean = true;
  isFocused: boolean = false;
  giggleTimeout: any;
  emojiElements: HTMLElement[] = [];
  typingSpeed: number = 0;
  lastTypedTime: number = 0;
  characterCount: number = 0;
  
  // For sound effects
  private audioContext: AudioContext | null = null;
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  
  ngAfterViewInit(): void {
    if (this.giggleAnimation) {
      this.initializeWobble();
    }
    
    // Initialize audio context on first user interaction
    const textareaEl = this.textareaElement.nativeElement;
    this.renderer.listen(textareaEl, 'click', () => {
      if (!this.audioContext && this.giggleSounds) {
        this.audioContext = new AudioContext();
      }
    });
    
    // Set initial height
    setTimeout(() => {
      this.autoResize(textareaEl);
    }, 0);
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  onInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.value = textarea.value;
    this.isValid = !this.required || (this.required && this.value.trim() !== '');
    
    // Calculate typing speed
    const now = Date.now();
    if (this.lastTypedTime > 0) {
      this.typingSpeed = now - this.lastTypedTime;
    }
    this.lastTypedTime = now;
    
    // Update character count
    this.characterCount = this.value.length;
    
    this.autoResize(textarea);
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    
    // Trigger giggle effects based on typing activity
    this.triggerGiggleEffects();
    
    // Check if field is complete
    if (this.confettiOnComplete && this.required && this.isValid && this.value.trim().length > 10) {
      this.triggerConfetti();
    }
  }
  
  onFocus(): void {
    this.isFocused = true;
    if (this.giggleAnimation) {
      this.addWiggleClass();
    }
  }
  
  onBlur(): void {
    this.isFocused = false;
    this.onTouched();
    if (this.giggleAnimation) {
      this.removeWiggleClass();
    }
  }
  
  autoResize(textarea: HTMLTextAreaElement): void {
    this.renderer.setStyle(textarea, 'height', 'auto');
    const scrollHeight = textarea.scrollHeight;
    const maxHeight = this.maxRows * 24; // 24px per line is a good estimate
    
    if (scrollHeight <= maxHeight) {
      this.renderer.setStyle(textarea, 'height', `${scrollHeight}px`);
    } else {
      this.renderer.setStyle(textarea, 'height', `${maxHeight}px`);
    }
  }
  
  writeValue(value: string): void {
    this.value = value || '';
    
    // We need to resize the textarea when the value is set programmatically
    setTimeout(() => {
      if (this.textareaElement) {
        this.autoResize(this.textareaElement.nativeElement);
      }
    });
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
  
  // Giggle enhancements
  
  private initializeWobble(): void {
    const container = this.el.nativeElement;
    this.renderer.addClass(container, 'giggly-container');
  }
  
  private addWiggleClass(): void {
    const textareaEl = this.textareaElement.nativeElement;
    this.renderer.addClass(textareaEl, 'wiggle-focus');
  }
  
  private removeWiggleClass(): void {
    const textareaEl = this.textareaElement.nativeElement;
    this.renderer.removeClass(textareaEl, 'wiggle-focus');
  }
  
  private triggerGiggleEffects(): void {
    // Clear previous timeout
    if (this.giggleTimeout) {
      clearTimeout(this.giggleTimeout);
    }
    
    // Only trigger if typing is active and not too slow
    if (this.typingSpeed > 0 && this.typingSpeed < 1000) {
      // Play sound if enabled
      if (this.giggleSounds) {
        //this.playGiggleSound();
      }
      
      // Add a floating emoji if animation is enabled
      if (this.giggleAnimation) {
        this.addFloatingEmoji();
      }
      
      // Trigger wiggle effect
      const textareaEl = this.textareaElement.nativeElement;
      this.renderer.addClass(textareaEl, 'giggle-shake');
      
      // Emit event
      this.giggleTriggered.emit();
      
      // Remove class after animation completes
      this.giggleTimeout = setTimeout(() => {
        this.renderer.removeClass(textareaEl, 'giggle-shake');
      }, 500);
    }
  }
  
  private addFloatingEmoji(): void {
    const container = this.el.nativeElement;
    const textarea = this.textareaElement.nativeElement;
    
    // Choose a random emoji
    const emoji = this.giggleEmojis[Math.floor(Math.random() * this.giggleEmojis.length)];
    
    // Create and position the emoji element
    const emojiElement = this.renderer.createElement('div');
    this.renderer.addClass(emojiElement, 'floating-emoji');
    this.renderer.setProperty(emojiElement, 'textContent', emoji);
    
    // Random position above the textarea
    const left = Math.random() * textarea.offsetWidth;
    this.renderer.setStyle(emojiElement, 'left', `${left}px`);
    
    // Append to container
    this.renderer.appendChild(container, emojiElement);
    this.emojiElements.push(emojiElement);
    
    // Remove emoji after animation completes
    setTimeout(() => {
      if (container.contains(emojiElement)) {
        this.renderer.removeChild(container, emojiElement);
        this.emojiElements = this.emojiElements.filter(el => el !== emojiElement);
      }
    }, 2000);
  }
  
  private playGiggleSound(): void {
    if (!this.audioContext) return;
    
    // Create oscillator for a playful sound
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    // Set up the sound parameters based on giggle level
    switch (this.giggleLevel) {
      case 'low':
        oscillator.type = 'sine';
        oscillator.frequency.value = 400 + Math.random() * 100;
        break;
      case 'medium':
        oscillator.type = 'triangle';
        oscillator.frequency.value = 450 + Math.random() * 150;
        break;
      case 'high':
        oscillator.type = 'square';
        oscillator.frequency.value = 500 + Math.random() * 200;
        break;
    }
    
    // Very short quiet sound
    gainNode.gain.value = 0.1;
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Play the sound
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + 0.1);
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }
  
  private triggerConfetti(): void {
    // Create and inject confetti elements
    const container = this.el.nativeElement;
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = this.renderer.createElement('div');
      this.renderer.addClass(confetti, 'confetti');
      
      // Randomize confetti appearance
      const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      this.renderer.setStyle(confetti, 'background-color', color);
      
      // Randomize position and animation
      const left = Math.random() * 100;
      const animDuration = 2 + Math.random() * 2;
      const animDelay = Math.random() * 0.5;
      
      this.renderer.setStyle(confetti, 'left', `${left}%`);
      this.renderer.setStyle(confetti, 'animation-duration', `${animDuration}s`);
      this.renderer.setStyle(confetti, 'animation-delay', `${animDelay}s`);
      
      this.renderer.appendChild(container, confetti);
      
      // Remove after animation
      setTimeout(() => {
        if (container.contains(confetti)) {
          this.renderer.removeChild(container, confetti);
        }
      }, (animDuration + animDelay) * 1000);
    }
  }
}