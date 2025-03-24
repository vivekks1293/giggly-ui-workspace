import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyChipsComponent } from './giggly-chips.component';

describe('GigglyChipsComponent', () => {
  let component: GigglyChipsComponent;
  let fixture: ComponentFixture<GigglyChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
