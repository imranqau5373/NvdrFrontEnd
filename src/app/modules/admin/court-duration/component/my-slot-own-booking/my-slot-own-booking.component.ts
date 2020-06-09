import { Component, OnInit, Input } from '@angular/core';
import { BookingSlotModel, BookedOwnSlot } from '@core/model/courtsBooking-model/booking-slot.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { BookingService } from '@core/service/booking-service';

@Component({
  selector: 'app-my-slot-own-booking',
  templateUrl: './my-slot-own-booking.component.html',
  styleUrls: ['./my-slot-own-booking.component.css']
})
export class MySlotOwnBookingComponent implements OnInit {

  @Input() slotId : Number = 0;
  slotBookingModel : BookedOwnSlot;
  constructor(   public activeModal: NgbActiveModal,
    private toastService: SpeekioToastService,
    private bookingService : BookingService) { }

  ngOnInit() {


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
