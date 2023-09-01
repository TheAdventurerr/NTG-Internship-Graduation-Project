import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{

  products: any[] = [];
  base64:any = ''
  categories:string[] = [];
  form!:FormGroup

  constructor(private productService: ProductsService, private build:FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((res:any) => {
      this.products = res

    }
    , error => {
      this.toastr.error("Failed To Reach The Server")
  })
  }

  getCategories(){
    this.productService.getAllProducts().subscribe((res:any) => {
      this.categories = res

    }
    )
    
  }

  getSelectedCategory(event:any){
    this.form.get('category')?.setValue(event.target.value)
    console.log(this.form)
  }


      // Function to generate an array of stars based on the rating
      getStars(rating: number): number[] {
        const roundedRating = Math.round(rating); // Round the rating to the nearest integer
        return Array.from({ length: roundedRating }, (_, index) => index);
      }

}
