import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(  private authService: AuthService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ( this.authService.auth[0] ) {
        return true
      }
      console.log('Bloqueado por el authGuard - CanActive');
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | Promise<boolean>  | boolean {
      if ( this.authService.auth[0] ) {
        return true
      }
      console.log('Bloqueado por el authGuard - CanLoad');
      
    return false;
  }
}
