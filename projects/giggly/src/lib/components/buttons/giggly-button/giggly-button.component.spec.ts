import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyButtonComponent } from './giggly-button.component';

describe('GigglyButtonComponent', () => {
  let component: GigglyButtonComponent;
  let fixture: ComponentFixture<GigglyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
