import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UserSectionComponent} from "./user-section/user-section.component";
import {AdminDashboardComponent} from "./admin-dashboard.component";

const adminRoutes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent,
    children : [
      { path: 'user-section', component: UserSectionComponent}
    ]
  },
  /*{ path: 'admin-dashboard/user-section', component: UserSectionComponent},
  { path: 'admin-dashboardproduct-details/:productID', component: ProductDetailsComponent },*/
  { path: 'admin-dashboard',  redirectTo: '/admin-dashboard', pathMatch: 'full' }, // redirect to `main-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
