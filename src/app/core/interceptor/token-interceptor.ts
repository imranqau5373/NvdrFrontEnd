import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '@core/service/authenticationService';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService
    ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn()) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization": 'Bearer ' + localStorage.getItem('authenticationToken'), 
        })
      });
  }
  
  // passing control to the next interceptor in the chain, if there is one
  return next.handle(request).pipe(
      //call handleError<T function as we are calling in booking.service.ts etc. and handle unauthorize error there, but problem is that this function is not being used by all api's
      catchError((error, caught) => {
          if (error.status === 401) {
              this.authenticationService.removeLocalStorage();
              this.authenticationService.logoutAndRedirectToLogin();
              // return Observable.throw(error);
              return throwError(error);
          }
          else {
              // return Observable.throw(error);
              return throwError(error);
          }
      }
      ) as any
  );
  }
 
}
