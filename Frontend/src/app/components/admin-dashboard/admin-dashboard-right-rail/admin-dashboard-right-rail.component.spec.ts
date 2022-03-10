import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardRightRailComponent } from './admin-dashboard-right-rail.component';

describe('AdminDashboardRightRailComponent', () => {
  let component: AdminDashboardRightRailComponent;
  let fixture: ComponentFixture<AdminDashboardRightRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardRightRailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardRightRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
