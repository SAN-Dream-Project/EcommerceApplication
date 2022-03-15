import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { AdminDashboardRoutingModule } from "./admin-dashboard-routing.module";
import { AdminDashboardLeftRailComponent } from "./admin-dashboard-left-rail/admin-dashboard-left-rail.component";
import { AdminDashboardRightRailComponent } from "./admin-dashboard-right-rail/admin-dashboard-right-rail.component";
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UserSectionComponent,
    AdminDashboardComponent,
    AdminDashboardLeftRailComponent,
    AdminDashboardRightRailComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminBodyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminDashboardRoutingModule,
    NgxSpinnerModule
  ]
})
export class AdminDashboardModule { }
