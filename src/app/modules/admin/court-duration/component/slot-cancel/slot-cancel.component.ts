import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '@core/service/booking-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';

@Component({
  selector: 'app-slot-cancel',
  templateUrl: './slot-cancel.component.html',
  styleUrls: ['./slot-cancel.component.css']
})
export class SlotCancelComponent implements OnInit {


  @Input() slotId : Number = 0;
  @Input() slotData : any;
  constructor(   public activeModal: NgbActiveModal,
    private toastService: SpeekioToastService,
    private bookingService : BookingService) { }

  ngOnInit() {


  }

  closeDialog(){
    this.activeModal.dismiss();
  }


  
  cancelSlot(){
    this.bookingService.cancelBookingSlot(this.slotId).subscribe(result => {
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
