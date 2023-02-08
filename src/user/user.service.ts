import { Injectable } from '@nestjs/common';

import { UserForm } from "./userform.dto";

@Injectable()
export class UserService {
  getIndex():string {
    return "User Index";
  }

  getNutritionistList():string {
    return "Get All Nutritionist Info";
  }

  getTrainerList():string {
    return "Get All Trainer Info";
  }

  getNutritionist(qry):any {
    return "Location: "+qry.location+" and Hours:"+qry.hours;
  }

  getTrainer(qry):any {
    return "Location: "+qry.location+" and Hours:"+qry.hours;
  }

  NewUser(mydto:UserForm):any {
    return "User Inserted name " +mydto.name+" and ID: "+mydto.id;
  }

  updateUserbyId(name,id):any {
    return "Update user where id "+id+" and change name to "+name;
  }

  deleteUserbyId(id):any {
    return "Delete id is "+id;
  }

  PostQuestion(mydto:UserForm):any {
    return "User Inserted question"+mydto.question;
  }

  UpdateQuestion(question,id):any {
    return "Update user where id "+id+" and change question to "+question;
  }

  DeleteQuestion(id):any {
    return "Delete question where id "+id;
  }

  getAllQuestion():string {
    return "All Question";
  }
}
