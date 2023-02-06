import { Injectable } from '@nestjs/common';
import { NutritionistForm } from './nutritionistForm.dto';

@Injectable()
export class NutritionistService {
  getIndex(): string {
    return 'Nutritionist Index';
  }

  getDashboard(): string {
    return 'Nutritionist dashboard';
  }
}

// getUserByID(id): any {
//     return 'the id is ' + id;
//   }

//   getUserByIDName(qry): any {
//     return 'the id is ' + qry.id + ' and name is ' + qry.name;
//   }

//   insertUser(mydto: NutritionistForm): any {
//     return 'Admin Inserted name: ' + mydto.name + ' and id is ' + mydto.id;
//   }

//   updateUser(name, id): any {
//     return 'Admin updated name: ' + name + ' and id is ' + id;
//   }
//   updateUserbyid(name, id): any {
//     return 'Update admin where id ' + id + ' and change name to ' + name;
//   }
//   deleteUserbyid(id): any {
//     return 'Delete id is ' + id;
//   }
