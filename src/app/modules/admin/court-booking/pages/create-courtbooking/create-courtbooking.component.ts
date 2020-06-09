import { Component, OnInit } from '@angular/core';
import { CourtsBookingService } from '@core/service/courtsBooking-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { AddCourtsBookingModel } from '@core/model/courtsBooking-model/add-courtsBooking.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRouter } from '@shared/service/custom-router.service';
@Component({
  selector: 'app-create-courtbooking',
  templateUrl: './create-courtbooking.component.html',
  styleUrls: ['./create-courtbooking.component.css']
})
export class CreateCourtbookingComponent implements OnInit {

  constructor(
    private courtsBookingService: CourtsBookingService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter,
  ) { }
    sportsList: any[];
    courtsList: any[];
  addCourtsBookingData : AddCourtsBookingModel;
  courtsBookingId : number = 0;
  companyId: number =1;
  sportsId: number =1;
  isUpdated : boolean = false;

  ngOnInit() {
    this.addCourtsBookingData = new AddCourtsBookingModel();
    this.getSports(); //for the cmpany
    this.getCourts();    // for sport in cmpany
    this.courtsBookingId = this.activatedRoute.snapshot.params['id'];
    if(this.courtsBookingId > 0){
      this.isUpdated = true;
      this.getCourtsBooking(this.courtsBookingId);
  }
}
getSports(){   //get list of sports for cmp
  this.courtsBookingService.getSports(this.companyId).subscribe(result => {
    if (result && result.successful) {
      this.sportsList = result.usersList;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
selectSport(sportId){
  this.addCourtsBookingData.SportId = sportId;
}
getCourts(){  //get list of courts for cmp in selected sports
  this.courtsBookingService.getCourt(this.companyId,this.sportsId).subscribe(result => {
    if (result && result.successful) {
      this.courtsList = result.usersList;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
selectCourt(courtId){
  this.addCourtsBookingData.CourtId = courtId;
}
getCourtsBooking(courtsBookingId:number){
  this.courtsBookingService.getCourtsBooking(courtsBookingId).subscribe(result => {
    if (result && result.successful) {
      this.addCourtsBookingData = result;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
addCourtsBooking(){
    this.courtsBookingService.addCourtsBooking(this.addCourtsBookingData).subscribe(result => {
    if (result && result.successful) {
      this.toastService.showSuccess(result.body.message);
      this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtbooking-list');
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
updateCourtsBooking(){
this.courtsBookingService.updateCourtsBooking(this.addCourtsBookingData).subscribe(result =>{
  if(result && result.successful) {
    this.toastService.showSuccess(result.body.message);
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtbooking-list');
  }
  else {
    this.toastService.showError(result.message);
  }
});
}
}
