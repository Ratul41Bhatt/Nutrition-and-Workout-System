import {  ParseIntPipe,Controller ,Delete,Get, Post, Param,Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { createuserDto } from 'src/user/DTO/createuser.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
   
    @Get('/search/:id')
    searchUserById(
         @Param('id',ParseIntPipe) id:number){
            const user = this.userService.findUserById(id);
            if(user) return user;
            
         }
         @Get("/:id")
         getUserById(@Query() qar): String{
             return this.userService.getUser(qar);
         }
         @Get()
         getUsers(): String{
             return this.userService.getAllUser();
         }
         @Get("/:id")
         getUser(@Param() data): String{
             return this.userService.getUser(data); 
         }
         @Delete("/delete/:id")
         deleteAmbulance(@Param() prm): String{
             return this.userService.deleteUser(prm);
         }
         @Put("/edit/:id")
         editAmbulance(@Param() qar): String{
             return this.userService.editUser(qar) ;
         }
         @Post("/create/:id")
         addUser(@Param() qar): String{
             return this.userService.addUser(qar);
         }
    
}
