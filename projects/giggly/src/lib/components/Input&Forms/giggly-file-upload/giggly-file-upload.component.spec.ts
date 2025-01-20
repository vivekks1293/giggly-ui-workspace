import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyFileUploadComponent } from './giggly-file-upload.component';

describe('GigglyFileUploadComponent', () => {
  let component: GigglyFileUploadComponent;
  let fixture: ComponentFixture<GigglyFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyFileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
