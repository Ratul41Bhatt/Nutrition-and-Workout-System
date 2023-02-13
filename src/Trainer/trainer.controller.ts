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
  } from '@nestjs/common';
  import { TrainerService } from './trainer.service';
  import { TrainerBlogForm, TrainerForm } from './trainerForm.dto';
  
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
  
    @Post('/createtrainer')
    createtrainer(@Body() ndto: TrainerForm): any {
      return this.trainerService.createTrainer(ndto);
    }
  
    @Get('/findtrainer/:id')
    getUserByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getTrainerByID(id);
    }
  
    @Get('/findtrainer')
    getUserByIDName(@Query() qry: any): any {
      return this.trainerService.getTrainerByName(qry);
    }
  
    @Put('/updatetrainer/')
    updatetrainer(@Body('name') name: string, @Body('id') id: number): any {
      return this.trainerService.updateTrainer(name, id);
    }
  
    @Put('/updatetrainer/:id')
    updatetrainerbyid(
      @Body('name') name: string,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateTrainerByID(name, id);
    }
  
    @Delete('/deleteuser/:id')
    deleteTrainerByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.deleteTrainerByID(id);
    }
  
    @Post('/createblog')
    createblog(@Body() blogdto: TrainerBlogForm): any {
      return this.trainerService.createblog(blogdto);
    }
  
    @Get('/findblog/:id')
    getBlogByID(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.getBlogByID(id);
    }
  
    @Put('/updateblog/:id')
    updateUserbyid(
      @Body('title') title: string,
      @Body('description') description: string,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.trainerService.updateBlogByID(title, description, id);
    }
  
    @Delete('/deleteblog/:id')
    deleteBlog(@Param('id', ParseIntPipe) id: number): any {
      return this.trainerService.deleteBlog(id);
    }
  }