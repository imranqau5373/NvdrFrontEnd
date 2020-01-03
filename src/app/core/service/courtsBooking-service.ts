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
        return this._httpApiService.post("CourtsBooking/GetCourtsBookingList",model);
      }
      //Get list of courts for Booking in cmp in sports
      getBookingCourt():Observable<any>{
        return this._httpApiService.get("CourtsBooking/getBookingCourt",'');
      }
//User
// getCourtsUsers():Observable<any>{
//   return this._httpApiService.get("CourtsBooking/getCourtsUsers",'');
// }
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
