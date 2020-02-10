export class CourtBookingModel {
  id: number;
  v: string;
  description: string;
  courtName: string;
  userName: string;
  courtId : number;  //Show name instead
  userId : number;  // ----
  bookingStartTime : Date;
  bookingEndTime : Date;
  isBooked: boolean;
  isEmailed: boolean;
  //add sports id too
}

export class CourtsBookingListModelPagged {

    CourtBooking : CourtBookingModel[];
}
