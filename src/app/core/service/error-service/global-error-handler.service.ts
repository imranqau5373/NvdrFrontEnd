import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      // Server Error
      console.log("server side error:");
    } else {
      // Client Error
      console.log("client side error:");
      // notifier.showError(error.message);
    }
    console.error(error);
  }
}
