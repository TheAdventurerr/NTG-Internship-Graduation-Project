import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  getProducts: any;

  constructor(private http:HttpClient) { }

  createNewCart(model:any){
    return this.http.get('https://fakestoreapi.com/carts', model)
  }

}
