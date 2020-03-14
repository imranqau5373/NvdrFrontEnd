
import { SearchModelDto, StatusModelDto } from '@shared/service/page-listing-component-base';
import { GetUserRoleModel } from './add-users.model';

export class GetUserModel {
    pageNumber: number;
    pageSize: number;
    name: string;
    email: string;
    cell: string;
    roleIds: number[];
    statusIds: number[];
    sortColumn: string;
    sortDirection: string;
}

export class UserListModel {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isActive: boolean;
    roles: GetUserRoleModel[] = [];
    roleNames: string;
}

export class UserListFilterModel {
    pageNumber: number;
    pageSize: number;
    Id: SearchModelDto = {
        key: 'Job_Id',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    Name: SearchModelDto = {
        key: 'User_Name',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    Email: SearchModelDto = {
        key: 'User_Email',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    Cell: SearchModelDto = {
        key: 'User_Cell',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: null
    };
    Roles: SearchModelDto = {
        key: 'User_Role',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: []
    };
    Statuses: SearchModelDto = {
        key: 'User_Status',
        defaultValue: '',
        value: '',
        isOptionType: false,
        options: [
            new StatusModelDto(1, 'Active'),
            new StatusModelDto(2, 'Inactive'),
        ]
    };
}