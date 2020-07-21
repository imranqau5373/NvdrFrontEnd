import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { BookingService } from '@core/service/booking-service';

@Component({
  selector: 'app-login-booking-dialog',
  templateUrl: './login-booking-dialog.component.html',
  styleUrls: ['./login-booking-dialog.component.css']
})
export class LoginBookingDialogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
    private toastService: SpeekioToastService,
    private modalService: NgbModal,
    private bookingService : BookingService) { }

  ngOnInit() {

  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  singup(){

  }

  login(){

  }

  
  closeDialog(){
    this.activeModal.dismiss();
  }

}
