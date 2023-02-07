import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getIndex():string {
    return "User Index";
  }
}
