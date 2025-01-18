import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyComponent } from './giggly.component';

describe('GigglyComponent', () => {
  let component: GigglyComponent;
  let fixture: ComponentFixture<GigglyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
