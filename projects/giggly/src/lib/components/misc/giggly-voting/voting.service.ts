import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export interface VotingOption {
    id: string;
    text: string;
    votes: number;
    percentage?: number;
    voted?: boolean;
}
@Injectable({
    providedIn: 'root'
})
export class VotingService {
    private votingOptionsSubject = new BehaviorSubject<VotingOption[]>([]);
    votingOptions$ = this.votingOptionsSubject.asObservable();

    totalVotes$ = this.votingOptions$.pipe(
        map(options => options.reduce((sum, opt) => sum + opt.votes, 0))
    );

    initialize(options: VotingOption[]): void {
        const initializedOptions = options.map(option => ({
            ...option,
            percentage: 0,
            voted: false
        }));
        this.updateOptionsWithPercentages(initializedOptions);
    }



    vote(optionId: string): void {
        const currentOptions = this.votingOptionsSubject.value;
        const updatedOptions = currentOptions.map(option => ({
            ...option,
            votes: option.id === optionId ? option.votes + 1 : option.votes,
            voted: option.id === optionId
        }));
        this.updateOptionsWithPercentages(updatedOptions);
    }

    private updateOptionsWithPercentages(options: VotingOption[]): void {
        const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);
        const optionsWithPercentages = options.map(option => ({
            ...option,
            percentage: totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0
        }));
        this.votingOptionsSubject.next(optionsWithPercentages);
    }
}