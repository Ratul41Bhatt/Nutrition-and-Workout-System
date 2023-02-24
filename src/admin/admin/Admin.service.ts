import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from "./Admin.entity";
import { EmployeeForm } from "./Employeeform.dto";
import { EmployeeUpdateForm } from './employeeupdateform.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(AdminEntity)
    private EmployeeRepo: Repository<AdminEntity>,
  ) {}

getIndex():any { 
return this.EmployeeRepo.find();

}
getUserByID(id):any {
return this.EmployeeRepo.findOneBy({ id });
}

getUserByIDName(qry):any {
return this.EmployeeRepo.findOneBy({ id:qry.id,name:qry.name });
}

insertUser(mydto:EmployeeForm):any {
const Employeeaccount = new AdminEntity()
Employeeaccount.name = mydto.name;
Employeeaccount.email = mydto.email;
Employeeaccount.password = mydto.password;
Employeeaccount.age = mydto.age;
Employeeaccount.phone = mydto.phone;
return this.EmployeeRepo.save(Employeeaccount);
  }

updateUser(name,id):any {
console.log(name+id);
return this.EmployeeRepo.update(id,{name:name});
}
updateUserbyid(mydto:EmployeeUpdateForm,id):any {
return this.EmployeeRepo.update(id,mydto);
   }
deleteUserbyid(id):any {

    return this.EmployeeRepo.delete(id);
}
getAllUser():any{
  return this.EmployeeRepo.find();
}
}
