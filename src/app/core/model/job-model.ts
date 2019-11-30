export class JobDetailModel {


}


export class JobCardModel {

    id: number;
    Name: string;
    LastEdited: string;
    Description: string;
    currentStatus: number;
    appliersCount: number;
    type: string;

}

export class AddJobModel {
    id: number;
    name: string;
    reference: string;
    statusId: number;
    description: string;
    languageId: number;
    employmentTypeId: number;
    categoryId: number;
    qualificationId: number;
    minWorkHours: number;
    maxWorkHours: number;
}
