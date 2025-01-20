import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglySliderComponent } from './giggly-slider.component';

describe('GigglySliderComponent', () => {
  let component: GigglySliderComponent;
  let fixture: ComponentFixture<GigglySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglySliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
