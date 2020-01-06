
export class AddCourtsDurationModel {
    id: number;
    name: string;
    description: string;
    CourtId : number;
    CompanyId : number;
    SportId : number;
    CourtStartTime : Date;
    CourtEndTime : Date;
    CourtDuration: Date;
    //add sports id too
}
