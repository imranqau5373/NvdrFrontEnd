import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
    private _httpApiService: HttpApiService
    
    ) { }

    //This is template service. whenever create new service. copy this code and paste it in new service and do changes according to it.

    
    Method():Observable<any>{
      return this._httpApiService.get("","");
    }





}


