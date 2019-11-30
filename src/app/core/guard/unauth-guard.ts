import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '@core/service/authenticationService';

@Injectable({
    providedIn: 'root'
  })
export class UnAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     const currentUser = this.authenticationService.getJwtToken();
     if (currentUser) {
        this.router.navigate(['admin/home']);
         return false;
     }
    return true;
}
}
