export class CompanyBookingModel {
    id: number;
    name: string;
    description: string;
    courtName: string;
    userName: string;
    style: string;
    courtId : number;  //Show name instead
    userId : number;  // ----
    bookingStartTime : string;
    bookingEndTime : string;
    isBooked: boolean;
    isEmailed: boolean;
}
