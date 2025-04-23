import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyLoaderComponent } from './giggly-loader.component';

describe('GigglyLoaderComponent', () => {
  let component: GigglyLoaderComponent;
  let fixture: ComponentFixture<GigglyLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
