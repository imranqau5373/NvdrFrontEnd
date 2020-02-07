import { Component, OnInit } from '@angular/core';
import { BookingService } from '@core/service/booking-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRouter } from '@shared/service/custom-router.service';
import { CompanyBookingModel } from '@core/model/booking-model/company-booking.model';
import { CompanyBookingQuery } from '@core/model/booking-model/company-booking-query.model';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  bookingList?: CompanyBookingModel[] | undefined;
  bookingQuery : CompanyBookingQuery | undefined
  constructor(   private bookingService: BookingService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter) { }



  ngOnInit() {
this.getCompanyBookings();
  }

  getCompanyBookings(){
    debugger;
    this.bookingQuery = new CompanyBookingQuery();
    this.bookingQuery.todayDate = new Date();
    this.bookingQuery.bookingId= 1;
    this.bookingService.getCompanyBookings(this.bookingQuery).subscribe(result => {
      if (result && result.body && result.body.successful) {
        this.bookingList = result.body.Items;

      }
      else {
        this.toastService.showError(result.message);
      }
    });
  }

}
