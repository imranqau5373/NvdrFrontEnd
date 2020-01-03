import { Component, OnInit } from '@angular/core';
import { CourtsService } from '@core/service/courts-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { AddCourtsModel } from '@core/model/courts-model/add-courts.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRouter } from '@shared/service/custom-router.service';
@Component({
  selector: 'app-create-courts',
  templateUrl: './create-courts.component.html',
  styleUrls: ['./create-courts.component.css']
})
export class CreateCourtsComponent implements OnInit {

  constructor(
    private courtsService: CourtsService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter,
  ) { }
  companyList: any[];
  sportsList: any[];
addCourtsData : AddCourtsModel;
courtId : number = 0;
isUpdated : boolean = false;

  ngOnInit() {
    this.addCourtsData = new AddCourtsModel();
    //this.getCourtsCompany();
  
    this.courtId = this.activatedRoute.snapshot.params['id'];
    if(this.courtId > 0){
      this.isUpdated = true;
      this.getCourts(this.courtId);
  }
}
//need work on get sports nd cmpny in service
// getSports(){
//   this.courtsService.getSports().subscribe(result => {
//     if (result && result.successful) {
//       this.sportsList = result.sportsList;
//     }
//     else {
//       this.toastService.showError(result.message);
//     }
//    });
//   }
selectSport(sportId){
  this.addCourtsData.SportsId = sportId;
}
// getCourtsCompany(){
//   this.courtsService.getCourtsCompany().subscribe(result => {
//     if (result && result.successful) {
//       this.companyList = result.companyList;
//     }
//     else {
//       this.toastService.showError(result.message);
//     }
//   });
// }
selectCompany(companyId){
  this.addCourtsData.CompanyId = companyId;
}
getCourts(courtId:number){
  this.courtsService.getCourts(courtId).subscribe(result => {
    debugger;
    if (result && result.successful) {
      this.addCourtsData = result;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
addCourts(){
    this.courtsService.addCourts(this.addCourtsData).subscribe(result => {
    if (result && result.successful) {
      this.toastService.showSuccess(result.body.message);
      this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courts-list');
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
updateCourts(){
this.courtsService.updateCourts(this.addCourtsData).subscribe(result =>{
  if(result && result.successful) {
    this.toastService.showSuccess(result.body.message);
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courts-list');
  }
  else {
    this.toastService.showError(result.message);
  }
});
}
}
