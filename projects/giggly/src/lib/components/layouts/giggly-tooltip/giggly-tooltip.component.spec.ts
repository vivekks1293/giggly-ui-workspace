import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyTooltipComponent } from './giggly-tooltip.component';

describe('GigglyTooltipComponent', () => {
  let component: GigglyTooltipComponent;
  let fixture: ComponentFixture<GigglyTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
