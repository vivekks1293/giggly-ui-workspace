import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglSnackbarComponent } from './giggl-snackbar.component';

describe('GigglSnackbarComponent', () => {
  let component: GigglSnackbarComponent;
  let fixture: ComponentFixture<GigglSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
