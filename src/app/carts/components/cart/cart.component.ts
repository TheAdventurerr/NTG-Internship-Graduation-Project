import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private router: Router, private service: CartsService, private toastr: ToastrService){}
  cartProducts:any [] = []
  total:any = 0
  success:boolean = false

ngOnInit(): void {
this.getcartProducts()
}

  getcartProducts(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal()
  }

  getCartTotal(){
    this.total = 0 
    for(let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity
    }
  }

  addAmount(index:number){
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  minsAmount(index:number){
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  detectChange(){
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  deleteProduct(index:number){
  this.cartProducts.splice(index, 1)
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  this.toastr.success("Product Deleted Successfully")

  setTimeout(() => {
    window.location.reload();
  }, 2500);

  }

  clearCart(){
    this.cartProducts= []
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    this.toastr.success("Cart Deleted Successfully")

    setTimeout(() => {
      window.location.reload();
    }, 2500);

  }

  addCart(){
    let products =this.cartProducts.map(item => {
      return {productId:item.item.id, quantity:item.quantity}
    })
    let Model= {
      userId:5,
      date: new Date(),
      products:products
    }

    this.service.createNewCart(Model).subscribe(res => {
      this.success = true
    })
    this.toastr.success("Your Order is Successfully Send")

    console.log(Model)
  }


  shopMore(){
    this.router.navigate(['/Products']);
  }


}
