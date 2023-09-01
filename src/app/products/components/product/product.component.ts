import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartsService } from 'src/app/carts/services/carts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{
@Input() data!:Product
@Output() item = new EventEmitter()
addButton:boolean = false;
amount:number = 0
  constructor(private service: CartsService){}

  cartProducts:any [] = []

  ngOnInit(): void {
    this.getcartProducts()
    }

    getcartProducts(){
      if("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      }
    }

  add(){
    this.item.emit({item:this.data ,quantity:this.amount })

    setTimeout(() => {
    window.location.reload();
  }, 2500);

  }

}
