import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/api-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _httpService: HttpService,
    private router: Router
    ) { }

    isUserLoggedIn(){
        return true;
    }

    getJwtToken(){
        return localStorage.getItem("authenticationToken");
    }

    
    logoutAndRedirectToLogin(){
        this.router.navigate(['/auth/login']);
    }

    removeLocalStorage(){
      localStorage.removeItem('authenticationToken');
      localStorage.removeItem('userName');
      
  }




}


