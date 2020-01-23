
export class AddCourtsDurationModel {
    id: number;
    name: string;
    description: string;
    courtId : number;
    userId : number;
    courtStartTime : Date;
    courtEndTime : Date;
    slotDuration: number;
}
