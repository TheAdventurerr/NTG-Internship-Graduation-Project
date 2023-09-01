import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  id!:any
  data:any = {}
  loading:boolean = false
  constructor(private route:ActivatedRoute, private service:ProductsService, private toastr: ToastrService){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }


  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.loading = true
    this.service.getProductById(this.id).subscribe(res => {
      this.loading = false
      this.data = res
    }
    , error => {
      this.toastr.error("Failed To Reach The Server")
  })
  }

        // Function to generate an array of stars based on the rating
        getStars(rating: number): number[] {
          const roundedRating = Math.round(rating); // Round the rating to the nearest integer
          return Array.from({ length: roundedRating }, (_, index) => index);
        }

}
