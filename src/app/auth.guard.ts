import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Add your actual authentication logic here
    // For example, you can check if the user is logged in
    // If logged in, return true; otherwise, navigate to the login page
    const loggedIn = true; // Replace with your actual check

    if (!loggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
