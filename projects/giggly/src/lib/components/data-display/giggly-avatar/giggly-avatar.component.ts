import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-avatar',
  standalone: false,
  templateUrl: './giggly-avatar.component.html',
  styleUrl: './giggly-avatar.component.scss'
})
export class GigglyAvatarComponent {
  @Input() imageUrl?: string;
  @Input() name?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() shape: 'circle' | 'square' = 'circle';
  @Input() borderColor?: string;

  get initials(): string {
    if (this.name) {
      const nameParts = this.name.split(' ');
      return nameParts.length > 1
        ? nameParts[0][0] + nameParts[1][0]
        : nameParts[0][0];
    }
    return '';
  }
}
