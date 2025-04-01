import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { VotingService } from './voting.service';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { first } from 'rxjs/operators';
export interface VotingOption {
  id: string;
  text: string;
  votes: number;
  percentage?: number;
  voted?: boolean;
}
@Component({
  selector: 'giggly-voting',
  standalone: false,
  templateUrl: './giggly-voting.component.html',
  styleUrl: './giggly-voting.component.scss',
  animations: [
    trigger('fadeGrow', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('300ms ease-out',
          style({ opacity: 1, height: '*' }))
      ])
    ])
  ]
})
export class GigglyVotingComponent {
  @Input() question: string = '';
  @Input() options: VotingOption[] = [];
  @Input() showTimeLeft: boolean = true;
  @Input() timeLeftText: string = 'left';
  @Output() voteSelected = new EventEmitter<{
    id: string;
    text: string;
    votes: number;
    percentage: number;
  }>();

  votingOptions$!: Observable<VotingOption[]>;
  totalVotes$!: Observable<number>;
  hasVoted = false;
  selectedOptionId: string | null = null;

  constructor(private votingService: VotingService) { }

  ngOnInit(): void {
    this.votingService.initialize(this.options);
    this.votingOptions$ = this.votingService.votingOptions$;
    this.totalVotes$ = this.votingService.totalVotes$;
  }
  vote(optionId: string): void {
    if (this.hasVoted) return;

    this.hasVoted = true;
    this.selectedOptionId = optionId;
    this.votingService.vote(optionId);
    this.votingOptions$.pipe(first()).subscribe(options => {
      const selectedOption = options.find(opt => opt.id === optionId);
      if (selectedOption) {
        this.voteSelected.emit({
          id: selectedOption.id,
          text: selectedOption.text,
          votes: selectedOption.votes,
          percentage: selectedOption.percentage || 0
        });
      }
    });
  }



  trackByOptionId(index: number, option: VotingOption): string {
    return option.id;
  }
}
