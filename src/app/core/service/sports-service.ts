import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetSportsModel } from '@core/model/sports-model/get-sportsList.model';
import { AddSportsModel } from '@core/model/sports-model/add-sports.mode';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(
    private _httpApiService: HttpApiService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getSportsList(model: GetSportsModel):Observable<any>{
        return this._httpApiService.post("Sports/GetSportsList",model);
      }

      getSportsCompany():Observable<any>{
        return this._httpApiService.get("Sports/GetSportsCompanies",'');
      }

      addSports(model: AddSportsModel):Observable<any>{
        return this._httpApiService.post("Sports/AddSports",model);
      }


      updateSports(model: AddSportsModel):Observable<any>{
        return this._httpApiService.post("Sports/AddSports",model);
      }

      getSports(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("Sports/GetSports",Myobject);
      }





}
