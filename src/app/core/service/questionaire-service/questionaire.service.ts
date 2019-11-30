import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import {  QuestionaireSearchQuery, QuestionaireModel } from '@core/model/questionaire-Model';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireService {

  constructor(private httpApiService: HttpApiService) { }


  Save(model: QuestionaireModel): Observable<any> {
    return this.httpApiService.post("Questionaire", model);
  }

  Get(_query:QuestionaireSearchQuery): Observable<any> {
    return this.httpApiService.get("Questionaire",_query);
  }

  Delete(id:number): Observable<any> {
    debugger
    let url:string= `Questionaire/Delete/${id}`; 
    return this.httpApiService.delete(url);
  }

}
