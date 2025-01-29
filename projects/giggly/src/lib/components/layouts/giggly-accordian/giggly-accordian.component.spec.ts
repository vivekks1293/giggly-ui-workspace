import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyAccordianComponent } from './giggly-accordian.component';

describe('GigglyAccordianComponent', () => {
  let component: GigglyAccordianComponent;
  let fixture: ComponentFixture<GigglyAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyAccordianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
