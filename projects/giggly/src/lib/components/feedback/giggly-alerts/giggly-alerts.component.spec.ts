import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyAlertsComponent } from './giggly-alerts.component';

describe('GigglyAlertsComponent', () => {
  let component: GigglyAlertsComponent;
  let fixture: ComponentFixture<GigglyAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
