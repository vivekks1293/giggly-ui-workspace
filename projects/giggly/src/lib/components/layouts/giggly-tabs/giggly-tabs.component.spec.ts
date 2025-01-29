import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyTabsComponent } from './giggly-tabs.component';

describe('GigglyTabsComponent', () => {
  let component: GigglyTabsComponent;
  let fixture: ComponentFixture<GigglyTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
