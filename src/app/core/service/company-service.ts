import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetCompanyModel } from '@core/model/company-model/get-companyList.model';
import { AddCompanyModel } from '@core/model/company-model/add-company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private _httpApiService: HttpApiService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getCompanyList(model: GetCompanyModel):Observable<any>{
        return this._httpApiService.post("Company/GetCompanyList",model);
      }
      //Get Sports for company
      getCompanySports():Observable<any>{
        return this._httpApiService.get("Company/GetCompanySports",'');
      }
      //Get Courts fo company
      getCompanyCourts():Observable<any>{
        return this._httpApiService.get("Company/GetCompanyCourts",'');
      }


      addCompany(model: AddCompanyModel):Observable<any>{
        return this._httpApiService.post("Company/AddCompany",model);
      }


      updateCompany(model: AddCompanyModel):Observable<any>{
        return this._httpApiService.post("Company/UpdateCompany",model);
      }

      getCompany(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("Company/GetCompany",Myobject);
      }





}
