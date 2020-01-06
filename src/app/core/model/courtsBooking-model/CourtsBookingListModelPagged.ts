export class CourtBookingModel {
  id: number;
  name: string;
  description: string;
  CourtId : number;  //Show name instead
  UserId : number;  // ----
  BookingStartTime : Date;
  BookingEndTime : Date;
  IsBooked: boolean;
  IsEmailed: boolean;
  //add sports id too
}

export class CourtsBookingListModelPagged {

    CourtBooking : CourtBookingModel[];
}
