export class CourtDurationModel {
  id: number;
  name: string;
  description: string;
  courtName :  string;
  companyName:string;
  courtId : number; //get name
  courtStartTime : Date;
  courtEndTime : Date;
  slotDuration: number;
}

export class CourtsDurationListModelPagged {

    courts : CourtDurationModel[];
}
