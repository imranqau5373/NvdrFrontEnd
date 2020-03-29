
export class UserModel {
    authenticationToken: string;
    userName: string;
    pictureUrl: string;
    adminRole: string;
    completeName:string;
    companyId: any;
    permissions: UserPermissionModel[];
    isAdmin: boolean;
    userId: number;
    roleName: string;
}

export class UserPermissionModel {
    type: string;
    value: string;
}