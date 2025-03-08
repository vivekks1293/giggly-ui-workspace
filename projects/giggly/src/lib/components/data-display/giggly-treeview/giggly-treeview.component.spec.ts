import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyTreeviewComponent } from './giggly-treeview.component';

describe('GigglyTreeviewComponent', () => {
  let component: GigglyTreeviewComponent;
  let fixture: ComponentFixture<GigglyTreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyTreeviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
