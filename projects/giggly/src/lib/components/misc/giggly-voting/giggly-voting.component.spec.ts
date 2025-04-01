import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyVotingComponent } from './giggly-voting.component';

describe('GigglyVotingComponent', () => {
  let component: GigglyVotingComponent;
  let fixture: ComponentFixture<GigglyVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyVotingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
