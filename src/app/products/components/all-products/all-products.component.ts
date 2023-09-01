import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false
  cartProducts:any[] = []
  constructor(private service:ProductsService, private toastr: ToastrService){}

  ngOnInit(): void{
    this.getProducts()
    this.getCategories()
  }

    getProducts(){
      this.loading = true
      this.service.getAllProducts().subscribe((res:any) => {
        this.products = res
        this.loading = false

      }
      , error => {
        this.toastr.error("Failed To Reach The Server")
    })
    }

    getCategories(){
      this.loading = true
      this.service.getAllCategories().subscribe((res:any) => {
        console.log(res)
        this.categories = res
        this.loading = false

      }
    )
    }

    filterCategory(event:any){

      let value= event.target.value;
      (value == "all") ? this.getProducts() : this.getProductsCategory(value)
      console.log(value)
    }


    getProductsCategory(keyword:string){
      this.loading = true
      this.service.getProductsByCategory(keyword).subscribe((res:any) => {
        this.loading = false
        this.products = res
      })
    }

  addToCart(event:any){ 

    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id )
      if(exist){
        this.toastr.warning("Product Already in your Cart")
      } else{
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
        this.toastr.success("Product Added to your Cart")
      }
    } else{
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.toastr.success("Product Added to your Cart")
    }
  }

}
