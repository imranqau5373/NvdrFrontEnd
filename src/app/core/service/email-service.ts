import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { CommonService } from '@shared/service/common.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private _httpApiService: HttpApiService,
    private commonService: CommonService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getEmailsList( ){
        return this._httpApiService.get("nvdrEmail",'');
      }


}