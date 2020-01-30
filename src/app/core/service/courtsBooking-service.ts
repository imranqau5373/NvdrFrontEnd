import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
import { GetCourtsBookingModel } from '@core/model/courtsBooking-model/get-courtsBookingList.model';
import { AddCourtsBookingModel } from '@core/model/courtsBooking-model/add-courtsBooking.model';

@Injectable({
  providedIn: 'root'
})
export class CourtsBookingService {

  constructor(
    private _httpApiService: HttpApiService

    ) { }


    Method():Observable<any>{
      return this._httpApiService.get("","");
    }

    getCourtsBookingList(model: GetCourtsBookingModel):Observable<any>{
<<<<<<< HEAD
          debugger;
        return this._httpApiService.post("CourtsBooking/GetCourtsBookingsList",model);
=======
        return this._httpApiService.post("CourtsBooking/GetCourtsBookingList",model);
>>>>>>> 3a6ebde80642d271ccacc91c8e488d557952b477
      }
      //Get list of courts in cmpany in sports
      getCourt(companyId:number,sportsId:number):Observable<any>{
        let Myobject: any = {
           "companyId": companyId,
           "sportsId":sportsId   }
        return this._httpApiService.get("Courts/GetCourtsByCompanySportsId",Myobject);
      }
      //Get Sports for currnt cmpany
      getSports(companyId: number):Observable<any>{
          let Myobject: any = { "companyId": companyId }
        return this._httpApiService.get("Sports/GetSportsByCompanyId",Myobject);
      }
      addCourtsBooking(model: AddCourtsBookingModel):Observable<any>{
        return this._httpApiService.post("CourtsBooking/AddCourtsBooking",model);
      }


      updateCourtsBooking(model: AddCourtsBookingModel):Observable<any>{
        return this._httpApiService.post("CourtsBooking/UpdateCourtsBooking",model);
      }

      getCourtsBooking(id: number):Observable<any>{
        let Myobject: any = { "id": id }
        return this._httpApiService.get("CourtsBooking/GetCourtsBookings",Myobject);
      }

}
