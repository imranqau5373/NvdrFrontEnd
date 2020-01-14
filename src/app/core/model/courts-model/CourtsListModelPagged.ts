export class CourtModel {
  id: number;
  name: string;
    description: string;
  CompanyId : number;
  SportsId : number;
  sportsName : string;
}

export class CourtsListModelPagged {
    courts : CourtModel[];
}
