import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/products/services/products.service';


@Component({
  selector: 'app-products-control',
  templateUrl: './products-control.component.html',
  styleUrls: ['./products-control.component.css']
})

export class ProductsControlComponent  implements OnInit{
  
  products: any[] = [];
  base64:any = ''
  categories:string[] = [];
  form!:FormGroup

  constructor(private productService: ProductsService, private build:FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['']
    })
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

  getSelectedCategory(event:any){
    this.form.get('category')?.setValue(event.target.value)
    console.log(this.form)
  }


  getImagePath(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue("rhfgrgh")
      console.log(this.base64)
    };
  }


  addProduct(){
    const model = this.form.value
    this.productService.createProduct(model).subscribe(res => {
    console.log(this.form)
    this.toastr.success("Product Added Successfully")
    })
  }

  updateProduct(){
    this.toastr.success("Product Updated Successfully")
  }

  update(item:any){
    this.form.get('title')?.setValue(item.title)
    this.form.get('description')?.setValue(item.description)
    this.form.get('category')?.setValue(item.category)
    this.form.get('price')?.setValue(item.price)
    this.form.get('image')?.setValue(item.image)
    this.base64 = item.image
  }


  getCategories(){
    this.productService.getAllCategories().subscribe((res:any) => {
      console.log(res)
      this.categories = res

    }
    )
  }

  filterCategory(event:any){

    let value= event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsCategory(value)
    console.log(value)
  }


  getProductsCategory(keyword:string){
    this.productService.getProductsByCategory(keyword).subscribe((res:any) => {
      this.products = res
    })
  }

}
