import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardLeftRailComponent } from './components/admin-dashboard/admin-dashboard-left-rail/admin-dashboard-left-rail.component';
import { AdminDashboardRightRailComponent } from './components/admin-dashboard/admin-dashboard-right-rail/admin-dashboard-right-rail.component';
import {AdminDashboardModule} from "./admin-dashboard/admin-dashboard/admin-dashboard.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductsContainerComponent,
    CarouselComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    AdminDashboardComponent,
    AdminDashboardLeftRailComponent,
    AdminDashboardRightRailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminDashboardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [],
  exports: [
    AdminDashboardLeftRailComponent,
    AdminDashboardRightRailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
