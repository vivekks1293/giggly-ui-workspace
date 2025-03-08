import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyAvatarComponent } from './giggly-avatar.component';

describe('GigglyAvatarComponent', () => {
  let component: GigglyAvatarComponent;
  let fixture: ComponentFixture<GigglyAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
