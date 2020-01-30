import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetUserModel } from '@core/model/users-model/get-usersList.model';
import { AddUsersModel } from '@core/model/users-model/add-users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _httpApiService: HttpApiService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getUsersList(model: GetUserModel):Observable<any>{
        return this._httpApiService.post("Profile/GetProfileList",model);
      }

//Get Company Name for court duration


      addUser(model: AddUsersModel):Observable<any>{
        return this._httpApiService.post("Identity/SignUp",model);
      }
      getSportsCompany():Observable<any>{
        return this._httpApiService.get("Sports/GetSportsCompanies",'');
      }

      updateUser(model: AddUsersModel):Observable<any>{
        return this._httpApiService.post("Profile/UpdateProfile",model);
      }

      getUser(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("Profile/GetProfile",Myobject);
      }

}
