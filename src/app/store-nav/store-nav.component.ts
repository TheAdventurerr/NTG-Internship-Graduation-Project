import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from '../carts/services/carts.service';

@Component({
  selector: 'app-store-nav',
  templateUrl: './store-nav.component.html',
  styleUrls: ['./store-nav.component.css']
})
export class StoreNavComponent {

  constructor(private router: Router, private toastr: ToastrService, private service: CartsService) { }

  cartProducts:any [] = []

  ngOnInit(): void {
    this.getcartProducts()
    }

    getcartProducts(){
      if("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      }
    }

  confirmLogout() {
      const confirmation = confirm('Are you sure you want to log out?');
      if (confirmation) {
          this.logout();
      }
  }

  private logout() {
    this.toastr.success("Sign Out Successfully")
      this.router.navigate(['/Sign-in']);
  }


}
