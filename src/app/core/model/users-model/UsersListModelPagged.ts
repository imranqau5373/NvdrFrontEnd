export class UserModel {
  id: number;
  FirstName: string;
  LastName: string;
  Name : string;
  Email : string;
  Phone : string;
  Timezone : string;
  PictureUrl: string;
    PictureThumbnailUrl: string;
      OptInNewsletter: boolean;
      CompanyId: number;
}

export class UserListModelPagged {

    courts : UserModel[];
}
