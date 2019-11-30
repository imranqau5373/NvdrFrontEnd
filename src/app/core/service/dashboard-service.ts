import { Injectable } from '@angular/core';
import { HttpApiService } from '../../shared/http-api-service';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private _httpApiService: HttpApiService
    
    ) { }


    
    Home():Observable<any>{
      return this._httpApiService.get("Home/Index",'');
    }





}


