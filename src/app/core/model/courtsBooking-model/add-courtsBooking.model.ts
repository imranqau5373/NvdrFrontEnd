
export class AddCourtsBookingModel {
    id: number;
    name: string;
    description: string;
    CourtId : number;
    UserId : number;
    SportId : number;
    BookingStartTime : Date;
    BookingEndTime : Date;
    IsBooked: boolean;
    IsEmailed: boolean;
    //add sport id too
}
