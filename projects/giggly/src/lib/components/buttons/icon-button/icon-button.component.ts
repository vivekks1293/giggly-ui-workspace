import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'giggly-icon-button',
  standalone: false,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent implements AfterViewInit {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' | 'playful' | 'candy' | 'rainbow' = 'primary';
  @Input() disabled: boolean = false;
  @Input() gigglyLevel: 'low' | 'medium' | 'high' = 'medium';
  
  @Output() onClick = new EventEmitter();
  
  @ViewChild('confettiContainer') confettiContainer!: ElementRef;
  
  private confettiColors = [
    '#FF577F', '#FF884B', '#FFD384', '#FFF9B0', 
    '#A6D0DD', '#FFD1DA', '#C3FF99', '#FFB7FF'
  ];
  
  constructor(private el: ElementRef) {}
  
  ngAfterViewInit() {
    // const el = this.confettiContainer.nativeElement;
    if (this.variant === 'playful' || this.variant === 'candy' || this.variant === 'rainbow') {
      this.addWobbleEffect();
    }
  }
  
  onClickHandler(event: Event): void {
    if (!this.disabled) {
      // Create confetti effect on click
      this.createConfetti();
      
      // Add pop animation
      const button = this.el.nativeElement.querySelector('button');
      button.classList.add('pop');
      setTimeout(() => {
        button.classList.remove('pop');
      }, 300);
      
      // Play giggle sound if available
      this.playGiggleSound();
      
      this.onClick.emit(event);
    }
  }
  
  onMouseOver(): void {
    if (!this.disabled && (this.variant === 'playful' || this.variant === 'candy' || this.variant === 'rainbow')) {
      // Play subtle hover sound
      this.playHoverSound();
    }
  }
  
  private addWobbleEffect(): void {
    const button = this.el.nativeElement.querySelector('button');
    
    if (this.gigglyLevel === 'high') {
      // For high giggly level, add constant subtle movement
      const intensity = Math.random() * 2 + 1;
      button.style.animation = `float ${intensity}s infinite alternate ease-in-out`;
    }
  }
  
  private createConfetti(): void {
    const confettiContainer = this.el.nativeElement.querySelector('.confetti-container');
    if (!confettiContainer) return;
    
    const buttonRect = confettiContainer.getBoundingClientRect();
    const confettiCount = this.gigglyLevel === 'high' ? 30 : (this.gigglyLevel === 'medium' ? 15 : 5);
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // Random position within the button
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Random color
      const colorIndex = Math.floor(Math.random() * this.confettiColors.length);
      confetti.style.backgroundColor = this.confettiColors[colorIndex];
      
      // Random size
      const size = Math.random() * 6 + 4;
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      
      // Random direction
      const xDir = (Math.random() - 0.5) * 100;
      confetti.style.left = `${left}%`;
      confetti.style.top = `${top}%`;
      confetti.style.animationDelay = `${Math.random() * 0.2}s`;
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
      confetti.style.transform = `translateX(${xDir}px)`;
      
      confettiContainer.appendChild(confetti);
      
      // Remove confetti element after animation completes
      setTimeout(() => {
        if (confettiContainer.contains(confetti)) {
          confettiContainer.removeChild(confetti);
        }
      }, 3000);
    }
  }
  
  private playGiggleSound(): void {
    // This would be implemented with actual sound functionality
    // For demonstration purposes we'll just show the concept
    const audio = new Audio();
    
    switch(this.variant) {
      case 'playful':
        audio.src = 'assets/sounds/giggle.mp3';
        break;
      case 'candy':
        audio.src = 'assets/sounds/pop.mp3';
        break;
      case 'rainbow':
        audio.src = 'assets/sounds/sparkle.mp3';
        break;
      default:
        audio.src = 'assets/sounds/click.mp3';
    }
    
    // Uncomment to actually play sound when implemented
    // audio.volume = 0.5;
    // audio.play();
  }
  
  private playHoverSound(): void {
    // This would be implemented with actual sound functionality
    // const audio = new Audio('assets/sounds/hover.mp3');
    // audio.volume = 0.2;
    // audio.play();
  }
}