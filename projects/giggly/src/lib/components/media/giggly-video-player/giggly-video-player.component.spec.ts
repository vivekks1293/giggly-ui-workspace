import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyVideoPlayerComponent } from './giggly-video-player.component';

describe('GigglyVideoPlayerComponent', () => {
  let component: GigglyVideoPlayerComponent;
  let fixture: ComponentFixture<GigglyVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyVideoPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
