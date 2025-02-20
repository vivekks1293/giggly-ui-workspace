import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglyNavbarSidebarComponent } from './giggly-navbar-sidebar.component';

describe('GigglyNavbarSidebarComponent', () => {
  let component: GigglyNavbarSidebarComponent;
  let fixture: ComponentFixture<GigglyNavbarSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigglyNavbarSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglyNavbarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
