import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersCartsComponent } from './admin-cart/components/users-carts/users-carts.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ProductsControlComponent } from './products-control/products-control.component';
import { RatingComponent } from './rating/rating.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'Sign-in', component: LoginComponent },
  { path: 'Rating', component: RatingComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Products', component: AllProductsComponent },
  { path: 'Product-Details/:id', component: ProductsDetailsComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Feedback', component: FeedbackComponent },
  { path: 'Products-Control', component: ProductsControlComponent },
  { path: 'Contact-us', component: ContactUsComponent },
  { path: 'Admin-View', component: AdminViewComponent },
  { path: 'Users-Carts', component: UsersCartsComponent },
  { path: '', redirectTo: '/Sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
