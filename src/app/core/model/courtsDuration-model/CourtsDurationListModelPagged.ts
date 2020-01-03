export class CourtDurationModel {
  id: number;
  name: string;
  description: string;
  CourtId : number;
  CompanyId : number;
  CourtStartTime : Date;
  CourtEndTime : Date;
  CourtDuration: Date;
}

export class CourtsDurationListModelPagged {

    courts : CourtDurationModel[];
}
