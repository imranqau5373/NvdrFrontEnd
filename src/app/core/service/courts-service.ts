import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetCourtsModel } from '@core/model/courts-model/get-courtsList.model';
import { AddCourtsModel } from '@core/model/courts-model/add-courts.model';
import { CommonService } from '@shared/service/common.service';
@Injectable({
  providedIn: 'root'
})
export class CourtsService {
  constructor(
    private _httpApiService: HttpApiService,
    private commonService: CommonService
    ) { }
    Method():Observable<any>{
      return this._httpApiService.get("","");
    }
    getCourtsList( name: string, questionCount: number, lastUpdated: any,
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
        return this._httpApiService.post("Courts/GetCourtsList",temp);
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
