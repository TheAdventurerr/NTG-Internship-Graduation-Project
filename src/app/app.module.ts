import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SelectComponent } from './select/select.component';
import { ProductComponent } from './products/components/product/product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersCartsComponent } from './admin-cart/components/users-carts/users-carts.component';
import { FooterComponent } from './footer/footer.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ProductsControlComponent } from './products-control/products-control.component';
import { RatingComponent } from './rating/rating.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardNavComponent,
    StoreNavComponent,
    AllProductsComponent,
    CartComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    FeedbackComponent,
    ContactUsComponent,
    UsersCartsComponent,
    FooterComponent,
    AdminViewComponent,
    ProductsControlComponent,
    RatingComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates:true
    }),
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
