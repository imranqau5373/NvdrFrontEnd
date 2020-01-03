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
    //usersList: any[];
    courtsList: any[];
  addCourtsBookingData : AddCourtsBookingModel;
  courtsBookingId : number = 0;
  isUpdated : boolean = false;

  ngOnInit() {
    this.addCourtsBookingData = new AddCourtsBookingModel();
  //  this.getUsers();
    this.getCourts();
    this.courtsBookingId = this.activatedRoute.snapshot.params['id'];
    if(this.courtsBookingId > 0){
      this.isUpdated = true;
      this.getCourtsBooking(this.courtsBookingId);
  }
}
// getUsers(){
//   this.courtsBookingService.getCourtsUsers().subscribe(result => {
//     if (result && result.successful) {
//       this.usersList = result.usersList;
//     }
//     else {
//       this.toastService.showError(result.message);
//     }
//   });
// }
//Get list of courts available for this company sports booking
getCourts(){
  this.courtsBookingService.getBookingCourt().subscribe(result => {
    if (result && result.successful) {
      this.courtsList = result.usersList;
    }
    else {
      this.toastService.showError(result.message);
    }
  });
}
selectUser(userId){
  this.addCourtsBookingData.UserId = userId;
}
selectCourt(courtId){
  this.addCourtsBookingData.CourtId = courtId;
}
getCourtsBooking(courtsBookingId:number){
  this.courtsBookingService.getCourtsBooking(courtsBookingId).subscribe(result => {
    debugger;
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
