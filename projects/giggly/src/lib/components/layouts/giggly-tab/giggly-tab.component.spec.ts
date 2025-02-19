import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyTabComponent } from './giggly-tab.component';

describe('GigglyTabComponent', () => {
  let component: GigglyTabComponent;
  let fixture: ComponentFixture<GigglyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
