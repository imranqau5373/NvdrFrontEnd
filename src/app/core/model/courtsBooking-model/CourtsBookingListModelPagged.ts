export class CourtBookingModel {
  id: number;
  name: string;
  description: string;
  CourtId : number;
  UserId : number;
  BookingStartTime : Date;
  BookingEndTime : Date;
  IsBooked: boolean;
  IsEmailed: boolean;
}

export class CourtsBookingListModelPagged {

    CourtBooking : CourtBookingModel[];
}
