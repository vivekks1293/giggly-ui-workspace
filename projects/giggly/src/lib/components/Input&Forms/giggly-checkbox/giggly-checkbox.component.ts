import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'giggly-checkbox',
  templateUrl: './giggly-checkbox.component.html',
  styleUrls: ['./giggly-checkbox.component.scss'],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GigglyCheckboxComponent),
      multi: true,
    },
  ],
  animations: [
    trigger('bounce', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('bouncing', style({
        transform: 'scale(1)'
      })),
      transition('initial => bouncing', [
        animate('0.3s ease-in-out', style({ transform: 'scale(1.2)' })),
        animate('0.2s ease-in-out', style({ transform: 'scale(0.8)' })),
        animate('0.1s ease-in-out', style({ transform: 'scale(1.1)' })),
        animate('0.1s ease-in-out', style({ transform: 'scale(1)' }))
      ])
    ]),
    trigger('wiggle', [
      state('initial', style({
        transform: 'rotate(0)'
      })),
      state('wiggling', style({
        transform: 'rotate(0)'
      })),
      transition('initial => wiggling', [
        animate('0.1s ease-in-out', style({ transform: 'rotate(5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(-5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(3deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(-3deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(0)' }))
      ])
    ])
  ]
})
export class GigglyCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = 'Check me!';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() color: string = '#4caf50'; // Primary color
  @Input() theme: 'default' | 'bubbly' | 'rainbow' = 'default';
  @Input() playSound: boolean = true;
  @Input() useConfetti: boolean = false;
  @Input() emojiIcon: string = '✓'; // Default checkmark
  
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() giggle = new EventEmitter<void>();
  
  @ViewChild('checkboxElement') checkboxElement!: ElementRef;
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
  
  bounceState: 'initial' | 'bouncing' = 'initial';
  wiggleState: 'initial' | 'wiggling' = 'initial';
  hovered: boolean = false;
  uniqueId: string = `giggly-checkbox-${Math.random().toString(36).substring(2, 9)}`;
  
  gigglyEmojis: string[] = ['😄', '😆', '😊', '🤭', '😜', '🥳', '😂'];
  currentEmoji: string = '';
  bubbles: { id: number, x: number, y: number, size: number, emoji: string }[] = [];
  bubbleCount: number = 0;
  confettiActive: boolean = false;

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    this.currentEmoji = this.gigglyEmojis[Math.floor(Math.random() * this.gigglyEmojis.length)];
  }

  toggleCheck(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onChange(this.checked);
      this.checkedChange.emit(this.checked);
      this.onTouched();
      
      // Trigger animations
      this.bounceState = 'bouncing';
      this.wiggleState = 'wiggling';
      
      // Play sound if enabled
      if (this.playSound && this.audioElement) {
        this.audioElement.nativeElement.currentTime = 0;
        this.audioElement.nativeElement.play()
          .catch(err => console.warn('Audio playback was prevented by the browser', err));
      }
      
      // Create bubbles animation if bubbly theme
      if (this.theme === 'bubbly') {
        this.createBubbles();
      }
      
      // Show confetti if enabled
      if (this.useConfetti && this.checked) {
        this.showConfetti();
      }
      
      // Emit giggle event
      this.giggle.emit();
      
      // Choose a random emoji 
      this.currentEmoji = this.gigglyEmojis[Math.floor(Math.random() * this.gigglyEmojis.length)];
      
      // Reset animation states after animations complete
      setTimeout(() => {
        this.bounceState = 'initial';
        this.wiggleState = 'initial';
      }, 600);
    }
  }

  createBubbles(): void {
    const numBubbles = Math.floor(Math.random() * 3) + 3; // 3-5 bubbles
    
    for (let i = 0; i < numBubbles; i++) {
      const bubble = {
        id: this.bubbleCount++,
        x: Math.random() * 40 - 20, // Random position around the checkbox
        y: Math.random() * 10 - 30, // Start above the checkbox
        size: Math.random() * 15 + 10, // Random size
        emoji: this.gigglyEmojis[Math.floor(Math.random() * this.gigglyEmojis.length)]
      };
      
      this.bubbles.push(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        this.bubbles = this.bubbles.filter(b => b.id !== bubble.id);
      }, 1000);
    }
  }

  showConfetti(): void {
    this.confettiActive = true;
    setTimeout(() => {
      this.confettiActive = false;
    }, 2000);
  }

  onHover(): void {
    if (!this.disabled) {
      this.hovered = true;
      this.wiggleState = 'wiggling';
      
      setTimeout(() => {
        this.wiggleState = 'initial';
      }, 500);
    }
  }
  
  onHoverEnd(): void {
    this.hovered = false;
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