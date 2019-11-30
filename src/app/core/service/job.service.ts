import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable, of } from 'rxjs';
import { JobCardModel, AddJobModel } from '@core/model/job-model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpApiService: HttpApiService) { }

  //method to get all the drop down related data (in job posting page)
  getJobDropDownsList(): Observable<any> {
    return this.httpApiService.get("Job/GetJobDropDownsList", "");
  }

  //method to save a job
  saveJob(model: AddJobModel): Observable<any> {
    return this.httpApiService.post("Job/SaveJob", model);
  }

  getJob(jobid: number) {
    return this.httpApiService.post("Job/GetJobById", { id: jobid });
  }

  //method to update a job
  updateJob(model: AddJobModel): Observable<any> {
    return this.httpApiService.post("Job/UpdateJob", model);
  }


  jobs: JobCardModel[] =
    [
      {
        id: 1,
        Name: 'Bin 1',
        LastEdited: '2251425142',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 1,
        appliersCount: 4,
        type: 'my-job'
      },
      {
        id: 2,
        Name: 'Bin 2',
        LastEdited: '4455145855858',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 1,
        appliersCount: 2,
        type: 'my-job'
      },
      {
        id: 3,
        Name: 'Bin 3',
        LastEdited: '44551458558342',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 1,
        appliersCount: 1,
        type: 'my-job'
      },
      {
        id: 4,
        Name: 'Bin 4',
        LastEdited: '445514585532323',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 2,
        appliersCount: 3,
        type: 'active-jobs'
      },
      {
        id: 5,
        Name: 'Bin 5',
        LastEdited: '445514585523434',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 5,
        appliersCount: 6,
        type: 'active-jobs'
      },
      {
        id: 6,
        Name: 'Bin 6',
        LastEdited: '44551458552343',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 4,
        appliersCount: 2,
        type: 'active-jobs'
      },
      {
        id: 7,
        Name: 'Bin 7',
        LastEdited: '44551458523423',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 4,
        appliersCount: 7,
        type: 'archived-jobs'
      },
      {
        id: 8,
        Name: 'Bin 8',
        LastEdited: '445514585234234',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 2,
        appliersCount: 5,
        type: 'archived-jobs'
      },
      {
        id: 9,
        Name: 'Bin 9',
        LastEdited: '44551452342234',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 3,
        appliersCount: 8,
        type: 'archived-jobs'
      },
      {
        id: 10,
        Name: 'Bin 10',
        LastEdited: '7 minutes ago',
        Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        currentStatus: 1,
        appliersCount: 4,
        type: 'archived-jobs'
      }
    ];



  getJobCards(): Observable<JobCardModel[]> {

    return of(this.jobs);
  }
}
