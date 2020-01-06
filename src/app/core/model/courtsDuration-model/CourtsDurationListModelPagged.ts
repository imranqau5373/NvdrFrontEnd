export class CourtDurationModel {
  id: number;
  name: string;
  description: string;
  CourtId : number; //get name
  CompanyId : number;// --
  CourtStartTime : Date;
  CourtEndTime : Date;
  CourtDuration: Date;
  // add sports id too
}

export class CourtsDurationListModelPagged {

    courts : CourtDurationModel[];
}
