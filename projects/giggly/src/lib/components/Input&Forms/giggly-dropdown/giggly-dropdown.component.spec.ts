import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyDropdownComponent } from './giggly-dropdown.component';

describe('GigglyDropdownComponent', () => {
  let component: GigglyDropdownComponent;
  let fixture: ComponentFixture<GigglyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
