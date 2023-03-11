import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from "@nestjs/common";
import { ClientForm } from "./clientform.dto";
import { ClientUpdateForm } from "./clientupdateform.dto";
import { ClientService } from "./client.service";
import { UsePipes } from "@nestjs/common/decorators";
import { ValidationPipe } from "@nestjs/common/pipes";
import { QuestionForm } from "./question.dto";

@Controller('/client')
export class ClientController {
    constructor(private clientService: ClientService) {}

    @Get("/index")
    getIndex():any {
        return this.clientService.getIndex();
    }

    @Get("/dashboard")
    getDashboard():any {
        return this.clientService.getDashboard();
    }

    @Get("/nutritionistList")
    getNutritionistList():any {
        return this.clientService.getNutritionistList();
    }

    @Get("/trainerList")
    getTrainerList():any {
        return this.clientService.getTrainerList();
    }

    @Get("/findNutritionist")
    getNutritionist(@Query() qry:any): any {
        return this.clientService.getNutritionist(qry);
    }

    @Get("/findTrainer")
    getTrainer(@Query() qry:any): any {
        return this.clientService.getTrainer(qry);
    }

    @Get("/workout")
    getWorkout():any {
        return this.clientService.getWorkout();
    }

    @Get('/findExercisesByWorkoutname/:name')
    getexercisesByWorkoutName(@Param('name')name: string): any {
        return this.clientService.getexercisesByWorkoutName(name); 
    }

    @Post("/clientReg")
    @UsePipes(new ValidationPipe())
    NewClient(@Body() clientDto:ClientForm): any {
        return this.clientService.NewClient(clientDto);
    }

    @Put("/updateClient/:id")
    @UsePipes(new ValidationPipe())
    updateClientbyId(
        @Param("id", ParseIntPipe) id:number,
        @Body() clientDto:ClientUpdateForm
    ): any {
        return this.clientService.updateClientbyId(clientDto,id);
    }

    @Delete("/deleteClient/:id")
    deleteClientbyId(
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.clientService.deleteClientbyId(id);
    }

    @Post("/postQuestion")
    @UsePipes(new ValidationPipe())
    PostQuestion(@Body() quesDto:QuestionForm):any {
        return this.clientService.PostQuestion(quesDto);
    }

    @Put("/updateQuestion/:quesno")
    @UsePipes(new ValidationPipe())
    UpdateQuestion(
        @Param('quesno', ParseIntPipe) quesno:number,
        @Body() quesDto:QuestionForm
    ): any {
        return this.clientService.UpdateQuestion(quesno, quesDto);
    }

    @Delete("/deleteQuestion/:quesno")
    DeleteQuestion(
        @Param("quesno", ParseIntPipe) quesno:number
    ): any {
        return this.clientService.DeleteQuestion(quesno);
    }
    
    @Get("/allQuestion")
    getAllQuestion():any {
        return this.clientService.getAllQuestion();
    }

    @Get("/findQuestionById/:id")
    getQuestionById(@Param('id', ParseIntPipe) id: number):any {
        return this.clientService.getQuestionByName(id);
    }

    @Get("/findQuestionByName/:name")
    getQuestionByName(@Param("name")name: string):any {
        return this.clientService.getQuestionByName(name);
    }
}
