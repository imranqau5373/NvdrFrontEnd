import { Deserializable } from '@shared/deserializable';



export class LoginModel implements Deserializable {
    email?: string | undefined;
    password?: string | undefined;
    rememberMe?: boolean | undefined;
  
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }