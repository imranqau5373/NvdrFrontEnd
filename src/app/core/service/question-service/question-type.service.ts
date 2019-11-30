import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor(
    private _httpApiService: HttpApiService
    
    ) { }

    GetQuestionType():Observable<any>{
        return this._httpApiService.get("Question/GetQuestionTypes",'');
      }





}


