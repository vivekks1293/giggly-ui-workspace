import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyGridComponent } from './giggly-grid.component';

describe('GigglyGridComponent', () => {
  let component: GigglyGridComponent;
  let fixture: ComponentFixture<GigglyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
