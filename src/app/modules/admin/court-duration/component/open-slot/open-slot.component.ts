import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { BookingService } from '@core/service/booking-service';

@Component({
  selector: 'app-open-slot',
  templateUrl: './open-slot.component.html',
  styleUrls: ['./open-slot.component.css']
})
export class OpenSlotComponent implements OnInit {


  @Input() slotId : Number = 0;
  constructor(   public activeModal: NgbActiveModal,
    private toastService: SpeekioToastService,
    private bookingService : BookingService) { }

  ngOnInit() {

  }

  openSlot(){
    this.bookingService.openBookingSlot(this.slotId).subscribe(result => {
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
