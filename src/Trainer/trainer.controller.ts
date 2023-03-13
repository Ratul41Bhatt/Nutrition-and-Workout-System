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
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  ParseFilePipe,
  UploadedFile,
  Session
 
  
  } from '@nestjs/common';
import { parse } from 'querystring';

  import { TrainerService } from './trainer.service';
  import { TrainerForm, ExerciseForm , WorkoutForm} from './trainerForm.dto';
  
  import { FileInterceptor } from '@nestjs/platform-express';
  
  import { diskStorage } from 'multer';
  

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
  
    @Get('/findworkoutbyid/:id')
    getWorkoutByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getWorkoutByID(id);
    }
  
    @Get('/findworkoutbyname/:name')
    getWorkoutByName(@Param('name') name: String): any {
      return this.trainerService.getWorkoutByName(name);
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

    @Get('/findworkoutbyexerciseid/:id')
    getWorkoutByExerciseId(@Param('id', ParseIntPipe) id: number): any {
          return this.trainerService.getWorkoutByExerciseId(id); 
      }

    @Get('/findworkoutbyexercisename/:name')
      getWorkoutByExerciseName(@Param('name') name: string): any {
            return this.trainerService.getWorkoutByExerciseName(name); 
        }
  //////////////////////////////////////////////////////////////////////////
  
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
  
  @Get('/findexercisebyid/:id')
    getExerciseByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getExerciseByID(id);
  }

  @Get('/findexercisebyname/:name')
    getExerciseByName(@Param('name') name: String): any {
      return this.trainerService.getExerciseByName(name);
    }
  
  @Put('/updateexercise/:id')
  updateExercise(
      @Body() mydto: ExerciseForm,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateExercise(mydto, id);
  }

  @Get('/findexercisesbyworkoutid/:id')
  getexercisesByWorkoutID(@Param('id', ParseIntPipe) id: number): any {
        return this.trainerService.getexercisesByWorkoutID(id);
    }

    @Get('/findexercisesbyworkoutname/:name')
    getexercisesByWorkoutName(@Param('name')name: String): any {
          return this.trainerService.getexercisesByWorkoutName(name); 
      }

////////////////////////////////////////////////////////////////////////////////////////


//@Post('/addexercise')
// @UsePipes(new ValidationPipe())
// addexercise(@Body() adto: ExerciseForm): any {
 //    return this.trainerService.addexercise(adto);
//  }

@Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})}))

signup(@Body() mydto:TrainerForm,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 16000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.firstname = file.filename;  

return this.trainerService.signup(mydto);
console.log(file)
}

@Get('/signin')
signin(@Session() session, @Body() mydto:TrainerForm)
{
if(this.trainerService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

}
else
{
  return {message:"invalid credentials"};
}
  
}



@Post('/sendemail')
sendEmail(@Body() mydata){
return this.trainerService.sendEmail(mydata);
}
  

}