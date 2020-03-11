import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetSportsModel } from '@core/model/sports-model/get-sportsList.model';
import { AddSportsModel } from '@core/model/sports-model/add-sports.mode';
import { CommonService } from '@shared/service/common.service';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(
    private _httpApiService: HttpApiService,
    private commonService: CommonService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getSportsList(  name: string, questionCount: number, lastUpdated: any,
      createdBy: string, statusId: string[], sortColumn: any, sortDirection: any,
      pageNumber: any, pageSize: any):Observable<any>{
        const temp = {
          name: name,
          questionCount: questionCount,
          createdBy: createdBy,
          statusId: statusId,
          lastUpdated: lastUpdated ? {
            Date: this.commonService.prepareDateFormat(lastUpdated.Date),
            ComparisonType: lastUpdated.CompareType
          } : null,
          sortColumn: sortColumn,
          sortDirection: sortDirection,
          pageNumber: pageNumber,
          pageSize: pageSize,
        };
        return this._httpApiService.post("Sports/GetSportsList",temp);
      }

      getSportsCompany():Observable<any>{
        return this._httpApiService.get("Sports/GetSportsCompanies",'');
      }

      addSports(model: AddSportsModel):Observable<any>{
        return this._httpApiService.post("Sports/AddSports",model);
      }


      updateSports(model: AddSportsModel):Observable<any>{
        return this._httpApiService.post("Sports/UpdateSports",model);
      }

      getSports(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("Sports/GetSports",Myobject);
      }





}
