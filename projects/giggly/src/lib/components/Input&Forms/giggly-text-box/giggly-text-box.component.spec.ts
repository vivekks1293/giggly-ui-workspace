import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyTextBoxComponent } from './giggly-text-box.component';

describe('GigglyTextBoxComponent', () => {
  let component: GigglyTextBoxComponent;
  let fixture: ComponentFixture<GigglyTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyTextBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
