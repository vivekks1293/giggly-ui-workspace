import { Component, Input } from '@angular/core';

@Component({
  selector: 'giggly-video-player',
  standalone: false,
  templateUrl: './giggly-video-player.component.html',
  styleUrl: './giggly-video-player.component.scss'
})
export class GigglyVideoPlayerComponent {
  @Input() src!: string;
  @Input() poster: string = '';
  @Input() controls: boolean = true;
  @Input() autoplay: boolean = false;
  @Input() loop: boolean = false;
  @Input() muted: boolean = false;
}
