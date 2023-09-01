import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent {

  constructor(private router: Router, private toastr: ToastrService) { }

  confirmLogout() {
      const confirmation = confirm('Are you sure you want to sign out ?');
      if (confirmation) {
          this.logout();
      }
  }

  private logout() {
      this.toastr.success("Sign Out Successfully")
      this.router.navigate(['/Sign-in']);
  }

}
