import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyRadiobuttonComponent } from './giggly-radiobutton.component';

describe('GigglyRadiobuttonComponent', () => {
  let component: GigglyRadiobuttonComponent;
  let fixture: ComponentFixture<GigglyRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyRadiobuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
