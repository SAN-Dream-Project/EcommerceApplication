import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLeftRailComponent } from './admin-dashboard-left-rail.component';

describe('AdminDashboardLeftRailComponent', () => {
  let component: AdminDashboardLeftRailComponent;
  let fixture: ComponentFixture<AdminDashboardLeftRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLeftRailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardLeftRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
