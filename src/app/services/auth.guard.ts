import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
//this will check continuously whether the user is login or not
export class AuthGuard implements CanActivate {

  constructor(private loginService:LoginService,private router:Router)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLoggedIn())
    {
      return true;
    }

    this.router.navigate(['login'])

      return false;
  }


  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLoggedIn())
    {
      return true;
    }

    this.router.navigate(['login'])

      return false;
  }
*/
}
