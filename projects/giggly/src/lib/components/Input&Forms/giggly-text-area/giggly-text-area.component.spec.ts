import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyTextAreaComponent } from './giggly-text-area.component';

describe('GigglyTextAreaComponent', () => {
  let component: GigglyTextAreaComponent;
  let fixture: ComponentFixture<GigglyTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyTextAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
