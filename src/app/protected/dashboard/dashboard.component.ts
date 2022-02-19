import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent {

  show: boolean = false

  get auth(){
    return this.authService.auth
  }

  constructor( private router: Router,  private authService: AuthService ) { }

    // metodo para cerrar session
    logout() {
      this.router.navigateByUrl('/auth');
      this.authService.logout();
    }


}
