import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyProgressBarComponent } from './giggly-progress-bar.component';

describe('GigglyProgressBarComponent', () => {
  let component: GigglyProgressBarComponent;
  let fixture: ComponentFixture<GigglyProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
