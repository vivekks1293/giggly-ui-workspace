import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyDatePickerComponent } from './giggly-date-picker.component';

describe('GigglyDatePickerComponent', () => {
  let component: GigglyDatePickerComponent;
  let fixture: ComponentFixture<GigglyDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
