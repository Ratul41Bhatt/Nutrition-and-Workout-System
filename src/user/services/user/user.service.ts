import { Body, Injectable, Param, Query } from '@nestjs/common';


@Injectable()
export class UserService {
   users=[
    {
        id:1,
        email:'ratul@gmail.com',
        name:'Ratul',
    },
    {
        id:2,
        email:'rahim@gmail.com',
        name:'rahim',
    },
    {
        id:3,
        email:'sadman@gmail.com',
        name:'sadman',
    },
   ];


    findUserById(id:number){
        return this.users.find((user)=>user.id===id);
    }
  
      getAllUser(): string {
        return "Get all user without id";
      }
    
      getUser(@Param() data): string {
        return "Get user with id " + data.id;
      }
      deleteUser(@Param() prm): string {
        return "Delete user with id " + prm.id;
      }
      editUser(@Param() qar): string {
        return "Edit user with id " + qar.id;
      }
      addUser(@Param() qar): string {
        return "Create user with id "+qar.id;
      }
}
