import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { BookingService } from '@core/service/booking-service';

@Component({
  selector: 'app-confirmation-booking-dialog',
  templateUrl: './confirmation-booking-dialog.component.html',
  styleUrls: ['./confirmation-booking-dialog.component.css']
})
export class ConfirmationBookingDialogComponent implements OnInit {

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

  login(){

  }

  signup(){

  }
  

  
  closeDialog(){
    this.activeModal.dismiss();
  }
}
