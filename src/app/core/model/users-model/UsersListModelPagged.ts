export class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  name : string;
  email : string;
  phone : string;
  timezone : string;
  pictureUrl: string;
  pictureThumbnailUrl: string;
  optInNewsletter: boolean;
  companyId: number;
}

export class UserListModelPagged {

    users : UserModel[];
}
