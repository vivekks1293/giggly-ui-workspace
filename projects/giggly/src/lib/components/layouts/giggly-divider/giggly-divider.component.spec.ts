import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyDividerComponent } from './giggly-divider.component';

describe('GigglyDividerComponent', () => {
  let component: GigglyDividerComponent;
  let fixture: ComponentFixture<GigglyDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
