
// export class AddUsersModel {

//     firstName: string;
//     lastName: string;
//     email : string;
//     phone : string;
//     companyName : string;
//     companyPrivateUrl: string;
//     contactName: string;
//     password: string;
//     confirmPassword: string;
//     timezone : string;
//     subscribeNewsLetter: boolean;
// }

export class AddUserModel {
    userId: number;
    email: string;
    selectedRoles: GetUserRoleModel[] = []
}

export class GetUserRoleModel {
    id: number;
    name: string;
}
