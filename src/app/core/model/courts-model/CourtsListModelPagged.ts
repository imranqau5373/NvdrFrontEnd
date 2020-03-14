import { SearchModelDto, StatusModelDto } from '@shared/service/page-listing-component-base';


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
export class FilterCourtsRequestDto {
    pageNumber: number;
    pageSize: number;

    Id: SearchModelDto = {
        key: 'Courts_Id',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    Name: SearchModelDto = {
        key: 'Courts_Id',
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
