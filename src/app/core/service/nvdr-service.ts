import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetSportsModel } from '@core/model/sports-model/get-sportsList.model';
import { AddSportsModel } from '@core/model/sports-model/add-sports.mode';
import { CommonService } from '@shared/service/common.service';
import { NvdrModel } from '@core/model/nvdr-model';

@Injectable({
  providedIn: 'root'
})
export class NvdrService {

  constructor(
    private _httpApiService: HttpApiService,
    private commonService: CommonService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getNvdrList( ){
        return this._httpApiService.get("nvdr",'');
      }

      addNvdr(model: NvdrModel):Observable<any>{
        return this._httpApiService.post("nvdr",model);
      }


      updatevdr(model: NvdrModel):Observable<any>{
        return this._httpApiService.put("nvdr",model);
      }

      getNvdr(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get(`nvdr/getNvdrRecord/${id}`,'');
      }

      deleteNvdr(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.delete(`nvdr/${id}`);
      }

}