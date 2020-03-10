export class CourtDurationModel {
  id: number;
  name: string;
  description: string;
  courtName :  string;
  companyName:string;
  courtId : number; //get name
  //sportId : number;
  courtStartTime : Date;
  courtEndTime : Date;
  slotDuration: number;
  durationStatusId : number;
}

export class CourtsDurationListModelPagged {

    courts : CourtDurationModel[];
}
