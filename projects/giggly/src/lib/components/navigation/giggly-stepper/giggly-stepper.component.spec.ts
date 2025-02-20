import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyStepperComponent } from './giggly-stepper.component';

describe('GigglyStepperComponent', () => {
  let component: GigglyStepperComponent;
  let fixture: ComponentFixture<GigglyStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
