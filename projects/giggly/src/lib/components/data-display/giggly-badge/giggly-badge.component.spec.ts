import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyBadgeComponent } from './giggly-badge.component';

describe('GigglyBadgeComponent', () => {
  let component: GigglyBadgeComponent;
  let fixture: ComponentFixture<GigglyBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
