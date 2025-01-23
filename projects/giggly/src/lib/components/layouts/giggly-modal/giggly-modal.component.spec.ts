import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyModalComponent } from './giggly-modal.component';

describe('GigglyModalComponent', () => {
  let component: GigglyModalComponent;
  let fixture: ComponentFixture<GigglyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
