import { Component, OnInit } from '@angular/core';
import { AdminCartService } from '../../services/admin-cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-carts',
  templateUrl: './users-carts.component.html',
  styleUrls: ['./users-carts.component.css']
})
export class UsersCartsComponent {

constructor(private service: AdminCartService, private build:FormBuilder, private ProductsService:ProductsService, private toastr: ToastrService){}
carts:any [] = [];
products:any [] = [];
total= 0
form!:FormGroup
details:any;


ngOnInit(): void {
  this.form = this.build.group({
    start: [''],
    end: ['']
  })
  this.getAllCarts()
}

getAllCarts(){
  this.service.getAllCarts().subscribe((res:any) => {
    this.carts = res
  }
  , error => {
    this.toastr.error("Failed To Reach The Server")
})
}

applyFilter(){
  let date = this.form.value
  this.service.getAllCarts(date).subscribe((res:any) => {
    this.carts = res
  })
}


deleteCart(id:number){
  this.service.deleteCart(id).subscribe(res =>{
    this.getAllCarts()
    this.toastr.success("Cart Deleted Successfully")
  })

}

view(index:number) {
  this.products = []
  this.details = this.carts[index]
  for (let x in this.details.products) {
    this.ProductsService.getProductById(this.details.products[x].productId).subscribe(res => {
      this.products.push({item: res, quantity:this.details.products[x].quantity})
    })
  }
}

}
