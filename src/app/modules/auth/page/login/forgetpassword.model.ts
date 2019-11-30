import { Deserializable } from '@shared/deserializable';



export class ForgetPasswordModel implements Deserializable {
    forgetEmail?: string | undefined;
    
    
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }