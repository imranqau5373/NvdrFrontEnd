import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetCourtsModel } from '@core/model/courts-model/get-courtsList.model';
import { AddCourtsModel } from '@core/model/courts-model/add-courts.model';
@Injectable({
  providedIn: 'root'
})
export class CourtsService {
  constructor(
    private _httpApiService: HttpApiService
    ) { }
    Method():Observable<any>{
      return this._httpApiService.get("","");
    }
    getCourtsList(model: GetCourtsModel):Observable<any>{
        return this._httpApiService.post("Courts/GetCourtsList",model);
      }
//Get Sport of cmpany
getSports(companyId: number):Observable<any>{
    let Myobject: any = { "companyId": companyId }
  return this._httpApiService.get("Sports/GetSportsByCompanyId",Myobject);
}
      addCourts(model: AddCourtsModel):Observable<any>{
        return this._httpApiService.post("Courts/AddCourts",model);
      }
      updateCourts(model: AddCourtsModel):Observable<any>{
        return this._httpApiService.post("Courts/UpdateCourts",model);
      }
      getCourts(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("Courts/GetCourts",Myobject);
      }
}
