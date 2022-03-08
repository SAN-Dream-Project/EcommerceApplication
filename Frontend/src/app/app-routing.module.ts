import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'product-details/:productID', component: ProductDetailsComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `main-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
