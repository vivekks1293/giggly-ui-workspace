import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglySwitchComponent } from './giggly-switch.component';

describe('GigglySwitchComponent', () => {
  let component: GigglySwitchComponent;
  let fixture: ComponentFixture<GigglySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglySwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
