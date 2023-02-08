import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe} from "@nestjs/common";
import { UserForm } from "./userform.dto";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get("/index")
    getUser():any {
        return this.userService.getIndex();
    }

    @Get("/nutritionistlist")
    getNutritionistList():any {
        return this.userService.getNutritionistList();
    }

    @Get("/trainerlist")
    getTrainerList():any {
        return this.userService.getTrainerList();
    }

    @Get("/findnutritionist")
    getNutritionist(@Query() qry:any): any {
        return this.userService.getNutritionist(qry);
    }

    @Get("/findtrainer")
    getTrainer(@Query() qry:any): any {
        return this.userService.getTrainer(qry);
    }

    @Post("/userreg")
    NewUser(@Body() mydto:UserForm): any {
        return this.userService.NewUser(mydto);
    }

    @Put("/updateuser/:id")
    updateUserbyId(
        @Body("name") name:string,
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.userService.updateUserbyId(name,id);
    }

    @Delete("/deleteuser/:id")
    deleteUserbyId(
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.userService.deleteUserbyId(id);
    }

    @Post("/postquestion")
    PostQuestion(@Body() mydto:UserForm):any {
        return this.userService.PostQuestion(mydto)
    }

    @Put("/updatequestion/:id")
    UpdateQuestion(
        @Body("question") question:string,
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.userService.UpdateQuestion(question,id);
    }

    @Delete("/deletequestion/:id")
    DeleteQuestion(
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.userService.DeleteQuestion(id);
    }
    
    @Get("/allquestion")
    getAllQuestion():any {
        return this.userService.getAllQuestion();
    }
}
