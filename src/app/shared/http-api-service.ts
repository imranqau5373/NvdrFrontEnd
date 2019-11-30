import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { ConnectionService } from '@core/service/other/connection.service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  //urlPath: string = environment.production ? 'http://192.168.222.47:8091/api' : 'http://localhost:53382/api';
  urlPath: string;// =  'http://service.local.speekio.com/api';
  authorization: string = localStorage.getItem("authenticationToken");
  constructor(
    private http: HttpClient,
    private router: Router,
    private connectionService: ConnectionService
  ) {
    this.urlPath = this.connectionService.getApiUrl();
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: any): Observable<any> {
    let url_ = this.urlPath + path;
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        "Authorization": 'Bearer ' + localStorage.getItem('authenticationToken'),
      }),
      params: params
    };
    return this.http.request("get", url_, options_)
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.urlPath}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    let url_ = this.urlPath + path;
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        "Authorization": 'Bearer ' + localStorage.getItem('authenticationToken'),
      })
    };
    return this.http.request("post", url_, options_).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.urlPath}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  private HandleMapObservable(response: Response | any) {
    if (response.text()) {
      return response.json();
    }
  }

  private handleErrorObservable(error: Response | any, router: Router) {
    if (error.statusText == 'Unauthorized') {
      router.navigate(["/signin"]);
    }
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}