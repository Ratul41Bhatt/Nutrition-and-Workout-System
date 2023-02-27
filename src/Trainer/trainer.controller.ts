import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
  } from '@nestjs/common';

  import { TrainerService } from './trainer.service';
  import { ExerciseForm , WorkoutForm} from './trainerForm.dto';
  
  @Controller('/trainer')
  export class TrainerController {

    constructor(private trainerService: TrainerService) {}
  
    @Get('/index')
    getTrainer(): any 
    {
      return this.trainerService.getIndex();
    }
  
    @Get('/dashboard')
    getTrainerDashboard(): any 
    {
      return this.trainerService.getDashboard();
    }
  
    @Post('/createworkout')
    createWorkout(@Body() ndto: WorkoutForm): any 
    {
      return this.trainerService.createWorkout(ndto);
    }
  
    @Get('/findworkout/:id')
    getWorkoutByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getWorkoutByID(id);
    }
  
    @Get('/showallworkouts')
    getworkoutlist(@Query() qry: any): any {
    return this.trainerService.getworkoutlist();
    }

    @Delete('/deleteworkout/:id')
    deleteWorkout(@Param('id', ParseIntPipe) id: number): any
    {
      return this.trainerService.deleteWorkout(id);
    }

    @Put('/updateworkout/:id')
    updateWorkout(
      @Body() mydto: WorkoutForm,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateWorkout(mydto, id);
    }
  ////////////////////////////////////////////////////////////////////////////////
  
  @Post('/createexercise')
  @UsePipes(new ValidationPipe())
  createexercise(@Body() edto: ExerciseForm): any {
    return this.trainerService.createexercise(edto);
  }

  
  @Delete('/deleteexcercise/:id')
  deleteExercise(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.deleteExercise(id);

  }
  
  @Get('/showallexercises')
  getexerciselist(@Query() qry: any): any {
    return this.trainerService.getexerciselist();
  }
  
  @Get('/findexercise/:id')
    getExerciseByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getExerciseByID(id);
  }

  @Put('/updateexercise/:id')
  updateExercise(
      @Body() mydto: ExerciseForm,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateExercise(mydto, id);
  }
////////////////////////////////////////////////////////////////////////////////////////

//@Post('/addexercise')
///@UsePipes(new ValidationPipe())
//addExerciseToWorkout(@Body() managerdto: ManagerForm)): any {
//}

@Get('/findexercisesbyworkout/:id')
getexercisesByWorkoutID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getexercisesByWorkoutID(id);
  }

}