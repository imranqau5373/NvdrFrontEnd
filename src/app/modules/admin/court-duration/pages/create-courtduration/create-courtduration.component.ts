import { Component, OnInit } from '@angular/core';
import { CourtsDurationService } from '@core/service/courtsDuration-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { AddCourtsDurationModel } from '@core/model/courtsDuration-model/add-courtsDuration.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRouter } from '@shared/service/custom-router.service';
@Component({
  selector: 'app-create-courtduration',
  templateUrl: './create-courtduration.component.html',
  styleUrls: ['./create-courtduration.component.css']
})
export class CreateCourtdurationComponent implements OnInit {

  constructor(
    private courtsDurationService: CourtsDurationService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter,
    ) { }
    sportsList: any[];
    courtsList: any[];
  addCourtsDuratoinData : AddCourtsDurationModel;
  courtsDurationId : number = 0;
  isUpdated : boolean = false;
  companyId: number =0;
  sportsId: number =0;
  ngOnInit() {
    this.addCourtsDuratoinData = new AddCourtsDurationModel();
    this.getSports(); //get sports in cmpny
    this.getCourts(); //get courts in sport for cmpny
    this.courtsDurationId = this.activatedRoute.snapshot.params['id'];
    if(this.courtsDurationId > 0){
      this.isUpdated = true;
      this.getCourtsDuration(this.courtsDurationId);
  }
}
getCourts(){   //get list of courts for cmp in selected sports
  this.courtsDurationService.getCourts(this.companyId,this.sportsId).subscribe(result => {
    if (result && result.successful) {
      this.courtsList = result.usersList;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
getSports(){   //get list of sports for cmp
  this.courtsDurationService.getSports(this.companyId).subscribe(result => {
    if (result && result.successful) {
      this.sportsList = result.usersList;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
selectCourt(courtId){
  this.addCourtsDuratoinData.CourtId = courtId;
}
selectSport(sportId){
  this.addCourtsDuratoinData.SportId = sportId;
}
getCourtsDuration(courtsDurationId:number){
  this.courtsDurationService.getCourtsDuration(courtsDurationId).subscribe(result => {
    debugger;
    if (result && result.successful) {
      this.addCourtsDuratoinData = result;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
addCourtsDuration(){
    this.courtsDurationService.addCourtsDuration(this.addCourtsDuratoinData).subscribe(result => {
    if (result && result.successful) {
      this.toastService.showSuccess(result.body.message);
      this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtduration-list');
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
updateCourtsDuration(){
this.courtsDurationService.updateCourtsDuration(this.addCourtsDuratoinData).subscribe(result =>{
  if(result && result.successful) {
    this.toastService.showSuccess(result.body.message);
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtduration-list');
  }
  else {
    this.toastService.showError(result.message);
  }
});
}
}
