import { Component,ViewChild, OnInit } from '@angular/core';
import { BookingService } from '@core/service/booking-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRouter } from '@shared/service/custom-router.service';
import { CompanyBookingModel } from '@core/model/booking-model/company-booking.model';
import { CompanyBookingQuery } from '@core/model/booking-model/company-booking-query.model';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
//@ViewChild('schedulerReference', { static: false }) scheduler: jqxSchedulerComponent;

  bookingList?: CompanyBookingModel[] | undefined;
  bookingQuery : CompanyBookingQuery | undefined
  constructor(   private bookingService: BookingService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter) { }
 ngOnInit() {
// this.scheduler.ensureAppointmentVisible('id1');
// this.getCompanyBookings();
 }
//date: any = new jqx.date(2020, 11, 23);

 source: any =
 {
     dataType: 'json',
     dataFields: [
       { name: 'id', type: 'number' },
          { name: 'name', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'courtName', type: 'string' },
          { name: 'userName', type: 'string' },
          { name: 'courtId', type: 'number' },
          { name: 'style', type: 'number' },
          { name: 'calendar', type: 'string' },
          { name: 'bookingStartTime', type: 'date', format: 'yyyy-MM-dd HH:mm' },
          { name: 'bookingEndTime', type: 'date', format: 'yyyy-MM-dd HH:mm' }
     ],
     id: 'id',
     url : '../../../../assets/appointments.json'
     //localdata: this.getCompanyBookings()
 };
 dataAdapter: any = new jqx.dataAdapter(this.source);
 date: any = new jqx.date(2020, 11, 23);
getWidth() : any {
 if (document.body.offsetWidth < 850) {
   return '90%';
 }
 return 850;
}
 appointmentDataFields: any =
 {
   from: 'bookingStartTime',
    to: 'bookingEndTime',
    id: 'id',
    description: 'description',
    style: 'style',
    subject:'courtName',
    name: 'name'
 };
 resources: any =
 {
     colorScheme: "scheme05",
     dataField: "calendar",
     source: new jqx.dataAdapter(this.source)
 };
 views: any[] =
 [
     'dayView',
     'weekView',
     'monthView'
 ];
  getCompanyBookings() : any{

    this.bookingQuery = new CompanyBookingQuery();
    this.bookingQuery.todayDate = new Date();
    this.bookingQuery.bookingId= 1;
    this.bookingService.getCompanyBookings(this.bookingQuery).subscribe(result => {

      if (result && result.body && result.body.successful) {
        debugger;
        this.bookingList = result.body.Items;
      }
      else {
        this.toastService.showError(result.message);
      }
    });
    return this.bookingList;
  };
  // generateAppointments(): any {
  //     let appointments = new Array();
  //     let appointment1 = {
  //         id: "id1",
  //         description: "George brings projector for presentations.",
  //         location: "",
  //         subject: "Quarterly Project Review Meeting",
  //         calendar: "Room 1",
  //         start: new Date(2020, 10, 23, 9, 0, 0),
  //         end: new Date(2020, 10, 23, 16, 0, 0)
  //     };
  //      appointments.push(appointment1);
  //      return appointments;
  //  };
}
