import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { HttpApiService } from '@shared/http-api-service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _httpApiService: HttpApiService
    
    ) { }

    //This is template service. whenever create new service. copy this code and paste it in new service and do changes according to it.

    
    getQuestion():Observable<any>{
      return this._httpApiService.get("/CandidateTest/StartVideo","");
    }





}


