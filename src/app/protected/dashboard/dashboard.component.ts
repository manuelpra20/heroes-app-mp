import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent {

get auth(){
  return this.authService.auth
}




  constructor( private router: Router,  private authService: AuthService ) { }

  logout() {

    this.router.navigateByUrl('/auth');
    this.authService.logout();

  }


}
