import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyGridColComponent } from './giggly-grid-col.component';

describe('GigglyGridColComponent', () => {
  let component: GigglyGridColComponent;
  let fixture: ComponentFixture<GigglyGridColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyGridColComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyGridColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
