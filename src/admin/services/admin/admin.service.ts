import { Injectable } from '@nestjs/common';

import { AdminForm } from "src/admin/DTO/admin.dto";
import { CreateForm } from 'src/admin/DTO/create.dto';

@Injectable()
export class AdminService {
  getIndex():string {
    return "Admin Index";
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

  NewAdmin(mydto:AdminForm):any {
    return "Admin Inserted ID: "+mydto.id+", Name " +mydto.name+", and Email: "+mydto.email+ ", and Password: "+mydto.password+", Phone: "+mydto.phone;
  }

  updateAdminbyId(mydto:CreateForm, id):any {
    return "Update Admin where id "+id+" and change name to "+mydto.name+", Email to "+mydto.email+", Password to "+mydto.password+", id to "+mydto.id;
  }

  deleteAdminbyId(id):any {
    return "Delete Admin where id is "+id;
  }
/*
  PostQuestion(mydto:AdminForm):any {
    return "Admin Inserted question"+mydto.question;
  }

  UpdateQuestion(question,id):any {
    return "Update Admin where id "+id+" and change question to "+question;
  }

  DeleteQuestion(id):any {
    return "Delete question where id "+id;
  }

  getAllQuestion():string {
    return "All Question";
  } */
}
