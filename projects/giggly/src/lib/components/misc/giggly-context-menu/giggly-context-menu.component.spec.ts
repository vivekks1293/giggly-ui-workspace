import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyContextMenuComponent } from './giggly-context-menu.component';

describe('GigglyContextMenuComponent', () => {
  let component: GigglyContextMenuComponent;
  let fixture: ComponentFixture<GigglyContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyContextMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
