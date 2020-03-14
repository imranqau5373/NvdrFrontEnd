import { SearchModelDto, StatusModelDto } from '@shared/service/page-listing-component-base';

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
export class FilterCourtDurationRequestDto {
    pageNumber: number;
    pageSize: number;

    Id: SearchModelDto = {
        key: 'CourtDuration_Id',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    Name: SearchModelDto = {
        key: 'CourtDuration_Id',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    AddedQuestions: SearchModelDto = {
        key: 'Category_AddedQuestions',
        defaultValue: null,
        value: null,
        isOptionType: false,
        options: null
    };
    LastUpdated: SearchModelDto = {
        key: 'Category_LastUpdated',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    CreatedBy: SearchModelDto = {
        key: 'Category_CreatedBy',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };

    StatusId: SearchModelDto = {
        key: 'Category_Status',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: [
            new StatusModelDto(1, 'Draft'),
            new StatusModelDto(2, 'Published'),
        ]
    };

    //DynamicFilter: SearchModelDto[] = [];
}
