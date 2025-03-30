import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyDragListComponent } from './giggly-drag-list.component';

describe('GigglyDragListComponent', () => {
  let component: GigglyDragListComponent;
  let fixture: ComponentFixture<GigglyDragListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyDragListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyDragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
