import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {


  // Servicio que utilizamos para proteger las rutas privadas mediante el canLoad  y el canActivate

  constructor(  private authService: AuthService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ( this.authService.auth[0] ) {
        return true
      }
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | Promise<boolean>  | boolean {
      if ( this.authService.auth[0] ) {
        return true
      }
    
    return false;
  }
}
