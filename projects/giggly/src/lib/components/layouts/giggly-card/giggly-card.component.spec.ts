import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyCardComponent } from './giggly-card.component';

describe('GigglyCardComponent', () => {
  let component: GigglyCardComponent;
  let fixture: ComponentFixture<GigglyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
