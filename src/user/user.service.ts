import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

import { UserForm } from "./userform.dto";
import { UserUpdateForm } from './userupdateform.dto';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(UserEntity)
    private UserRepo: Repository<UserEntity>,
  ) {}

  getIndex():any {
    return this.UserRepo.find();
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
    const UserAccount = new UserEntity()
    UserAccount.name = mydto.name;
    UserAccount.email = mydto.email;
    UserAccount.password = mydto.password;
    UserAccount.age = mydto.age;
    return this.UserRepo.save(UserAccount);
  }

  updateUserbyId(mydto:UserUpdateForm, id):any {
    return this.UserRepo.update(id, mydto);
  }

  deleteUserbyId(id):any {
    return this.UserRepo.delete(id);
  }
/*
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
  } */
}
