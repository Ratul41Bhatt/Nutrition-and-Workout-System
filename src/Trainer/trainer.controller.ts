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
  import { TrainerBlogForm, TrainerForm , WorkoutForm} from './trainerForm.dto';
  
  @Controller('/trainer')
  export class TrainerController {
    constructor(private trainerService: TrainerService) {}
  
    @Get('/index')
    getTrainer(): any {
      return this.trainerService.getIndex();
    }
  
    @Get('/dashboard')
    getTrainerDashboard(): any {
      return this.trainerService.getDashboard();
    }
  
    @Post('/createworkout')
    createtrainer(@Body() ndto: TrainerForm): any {
      return this.trainerService.createTrainer(ndto);
    }
  
    @Get('/findworkout/:id')
    getUserByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getTrainerByID(id);
    }
  
    @Get('/findworkout')
    getUserByIDName(@Query() qry: any): any {
      return this.trainerService.getTrainerByName(qry);
    }
  
    @Put('/updateworkout/')
    updatetrainer(@Body('name') name: string, @Body('id') id: number): any {
      return this.trainerService.updateTrainer(name, id);
    }
  
    @Put('/updateworkout/:id')
    updatetrainerbyid(
      @Body('name') name: string,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateTrainerByID(name, id);
    }
  
    @Delete('/deleteworkout/:id')
    deleteTrainerByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.deleteTrainerByID(id);
    }
  
    @Post('/insertblog')
    createblog(@Body() blogdto: TrainerBlogForm): any {
      return this.trainerService.createblog(blogdto);
    }
  
    @Get('/findexcercise/:id')
    getBlogByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getBlogByID(id);
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
      insertexercise(@Body() trainerdto: WorkoutForm): any {
      return this.trainerService.insertexercise(trainerdto);
    }
    
  }