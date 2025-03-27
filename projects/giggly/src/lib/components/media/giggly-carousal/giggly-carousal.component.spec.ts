import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyCarousalComponent } from './giggly-carousal.component';

describe('GigglyCarousalComponent', () => {
  let component: GigglyCarousalComponent;
  let fixture: ComponentFixture<GigglyCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyCarousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
