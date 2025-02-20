import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyNavbarComponent } from './giggly-navbar.component';

describe('GigglyNavbarComponent', () => {
  let component: GigglyNavbarComponent;
  let fixture: ComponentFixture<GigglyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
