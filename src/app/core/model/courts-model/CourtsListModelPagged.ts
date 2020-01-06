export class CourtModel {
  id: number;
  name: string;
    description: string;
  CompanyId : number;
  SportsId : number;
}

export class CourtsListModelPagged {
    courts : CourtModel[];
}
