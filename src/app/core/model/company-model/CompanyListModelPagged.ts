export class CompanyModel {
  id: number;
  name: string;
  description: string;
  url : string;
}

export class CompanysListModelPagged {

    Company : CompanyModel[];
}
