import { Deserializable } from '@shared/deserializable';



export class ResetPasswordModel implements Deserializable {
    email?: string | undefined;
    password?: string | undefined;
    NewPassword? : string | undefined;
    confirmPassword?: string | undefined;
    resetToken?: string | undefined;
  
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }