import { Injectable } from '@angular/core';

import { Observable  } from 'rxjs';
import { HttpApiService } from '@shared/http-api-service';

@Injectable({
  providedIn: 'root'
})
export class VideoArchiveService {

  constructor(
    private _httpApiService: HttpApiService
    
    ) { }

    //This is template service. whenever create new service. copy this code and paste it in new service and do changes according to it.

    
    StartArchive(sessionId):Observable<any>{
      return this._httpApiService.post("/CandidateTest/StartArchive",sessionId);
    }

    StopArchive(archiveId):Observable<any>{
      return this._httpApiService.post("/CandidateTest/StopArchive",archiveId);
    }

    
    ViewArchive(archiveId):Observable<any>{
      return this._httpApiService.post("/CandidateTest/ViewArchive",archiveId);
    }





}


