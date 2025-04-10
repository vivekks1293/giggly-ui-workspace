import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyDraggableWindowComponent } from './giggly-draggable-window.component';

describe('GigglyDraggableWindowComponent', () => {
  let component: GigglyDraggableWindowComponent;
  let fixture: ComponentFixture<GigglyDraggableWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyDraggableWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyDraggableWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
