import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { BookingService } from '@core/service/booking-service';
import { BookingSlotModel } from '@core/model/courtsBooking-model/booking-slot.model';

@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.css']
})
export class SlotBookingComponent implements OnInit {

  @Input() slotId : Number = 0;
  slotBookingModel : BookingSlotModel;
  constructor(   public activeModal: NgbActiveModal,
    private toastService: SpeekioToastService,
    private bookingService : BookingService) { }

  ngOnInit() {
    //this.bookedSlot();
  }

  closeDialog(){
    this.activeModal.dismiss();
  }

    
  bookedSlot(){
    this.bookingService.bookedSlot(this.slotId).subscribe(result => {
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

}
