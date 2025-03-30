import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyImageViewerComponent } from './giggly-image-viewer.component';

describe('GigglyImageViewerComponent', () => {
  let component: GigglyImageViewerComponent;
  let fixture: ComponentFixture<GigglyImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyImageViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
