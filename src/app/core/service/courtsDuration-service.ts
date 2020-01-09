import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetCourtsDurationModel } from '@core/model/courtsDuration-model/get-courtsDurationList.model';
import { AddCourtsDurationModel } from '@core/model/courtsDuration-model/add-courtsDuration.model';

@Injectable({
  providedIn: 'root'
})
export class CourtsDurationService {

  constructor(
    private _httpApiService: HttpApiService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }
    getCourtsDurationList(model: GetCourtsDurationModel):Observable<any>{
        return this._httpApiService.post("CourtsDuration/GetCourtsDurationList",model);
      }
      //Get Sports for currnt cmpany
      getSports(companyId: number):Observable<any>{
          let Myobject: any = { "companyId": companyId }
        return this._httpApiService.get("Sports/GetSportsByCompanyId",Myobject);
      }
      //Get list of courts in cmpany in sports
      getCourts(companyId:number,sportId:number):Observable<any>{
          let Myobject: any = {
             "companyId": companyId,
             "sportsId":sportId   }
        return this._httpApiService.get("Courts/GetCourtsByCompanySportsId",Myobject);
      }
      addCourtsDuration(model: AddCourtsDurationModel):Observable<any>{
        return this._httpApiService.post("CourtsDuration/AddCourtsDuration",model);
      }
        updateCourtsDuration(model: AddCourtsDurationModel):Observable<any>{
        return this._httpApiService.post("CourtsDuration/UpdateCourtsDuration",model);
      }
      getCourtsDuration(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("CourtsDuration/GetCourtsDuration",Myobject);
      }
}
