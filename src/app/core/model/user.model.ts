
export class UserModel {
    authenticationToken: string;
    userName: string;
    pictureUrl: string;
    adminRole: string;
    completeName:string;
}

export class UserPermissionModel {
    type: string;
    value: string;
}