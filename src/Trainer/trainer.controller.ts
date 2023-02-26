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
    getexerciselistName(@Query() qry: any): any {
      return this.trainerService.getexerciselist();
    }
  
    @Put('/updateworkout/')
    updatetrainer(@Body('name') name: string, @Body('id') id: number): any {
      return this.trainerService.updateExercise(name, id);
    }
  
    @Put('/updateworkout/:id')
    updatetrainerbyid(
      @Body('name') name: string,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateExerciseByID(name, id);
    }
  
    @Delete('/deleteworkout/:id')
    deleteTrainerByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.deleteExerciseByID(id);
    }
  
    @Put('/updateexcercise/:id')
    updateUserbyid(
      @Body('title') title: string,
      @Body('description') description: string,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateBlogByID(title, description, id);
    }
  
    @Delete('/deleteexcercise/:id')
    deleteBlog(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.deleteBlog(id);

    }
    @Post('/insertexercise')
    @UsePipes(new ValidationPipe())
      insertexercise(@Body() trainerdto: ExerciseForm): any {
      return this.trainerService.insertexercise(trainerdto);
    }
    
  }