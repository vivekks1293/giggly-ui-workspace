import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyCheckboxComponent } from './giggly-checkbox.component';

describe('GigglyCheckboxComponent', () => {
  let component: GigglyCheckboxComponent;
  let fixture: ComponentFixture<GigglyCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
