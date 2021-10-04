import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { CommonService } from '@shared/service/common.service';

@Injectable({
  providedIn: 'root'
})
export class FaultEmailService {

  constructor(
    private _httpApiService: HttpApiService,
    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getFaultEmailsList( ){
        return this._httpApiService.get("nvdrFaultEmail",'');
      }


}