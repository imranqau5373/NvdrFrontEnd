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

    getuserList(model: GetUserModel):Observable<any>{
        return this._httpApiService.post("user/GetUserList",model);
      }

//Get Company Name for court duration


      adduser(model: AddUsersModel):Observable<any>{
        return this._httpApiService.post("user/AddUser",model);
      }


      updateuser(model: AddUsersModel):Observable<any>{
        return this._httpApiService.post("user/UpdateUser",model);
      }

      getuser(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("user/GetUser",Myobject);
      }

}
