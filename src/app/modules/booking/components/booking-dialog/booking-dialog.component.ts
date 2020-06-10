import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { BookingService } from '@core/service/booking-service';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent implements OnInit {
  bookingUserName : string ;
  @Input() slotId : Number = 0;
  constructor(public activeModal: NgbActiveModal,
    private toastService: SpeekioToastService,
    private bookingService : BookingService) { }

  ngOnInit() {
    this.bookingUserName = localStorage.getItem("userName");
  }

  bookedSlot(){
    this.bookingService.bookedOwnSlot(this.slotId).subscribe(result => {
      if (result && result.successful) {
        this.toastService.showSuccess(result.message);
        this.activeModal.dismiss();
      }
      else {
        this.toastService.showError(result.message);
        this.activeModal.dismiss();
      }
    });
  }

  closeDialog(){
    this.activeModal.dismiss();
  }

}
