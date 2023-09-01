import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SelectComponent } from '../select/select.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { StoreNavComponent } from '../store-nav/store-nav.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    SelectComponent,
    SpinnerComponent,
    ProductComponent,
    FormsModule,
    StoreNavComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates:true
    }),
  ]
})
export class ProductsModule { }
