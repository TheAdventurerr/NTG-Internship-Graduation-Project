import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private toastr: ToastrService) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/Users-Carts']);
      this.toastr.success("Welcome Admin")
    } else if (this.username === 'mohamed_ashraf' && this.password === 'password') {
      this.router.navigate(['/Products']);
      this.toastr.success("Welcome Back Mo Ashraf")
    } else {
      console.log('Incorrect username or password.');
      this.toastr.error("Incorrect Username or Password")
    }
  }

  
  playVideo() {
    const videoElement = document.querySelector('video') as HTMLVideoElement;
    videoElement.play();
    console.log("Done")
  }


}
