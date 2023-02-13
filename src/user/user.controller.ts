import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from "@nestjs/common";
import { UserForm } from "./userform.dto";
import { UserUpdateForm } from "./userupdateform.dto";
import { UserService } from "./user.service";
import { UsePipes } from "@nestjs/common/decorators";
import { ValidationPipe } from "@nestjs/common/pipes";

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
    @UsePipes(new ValidationPipe())
    NewUser(@Body() mydto:UserForm): any {
        return this.userService.NewUser(mydto);
    }

    @Put("/updateuser/:id")
    @UsePipes(new ValidationPipe())
    updateUserbyId(
        @Body() mydto:UserUpdateForm,
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.userService.updateUserbyId(mydto,id);
    }

    @Delete("/deleteuser/:id")
    deleteUserbyId(
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.userService.deleteUserbyId(id);
    }
/*
    @Post("/postquestion")
    PostQuestion(@Body() mydto:UserForm):any {
        return this.userService.PostQuestion(mydto)
    }

    @Put("/updatequestion/:id")
    UpdateQuestion(
        @Body("question") question:string,
        @Param('id', ParseIntPipe) id:number
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
    } */
}
