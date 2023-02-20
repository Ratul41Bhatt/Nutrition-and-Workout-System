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
import { NutritionistService } from './nutritionist.service';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { NutritionistBlogForm, NutritionistForm } from './nutritionistForm.dto';

@Controller('/nutritionist')
export class NutritionistController {
  constructor(private nutritionistService: NutritionistService) {}

  @Get('/index')
  getNutritionist(): any {
    return this.nutritionistService.getIndex();
  }

  @Get('/dashboard')
  getNutritionistDashboard(): any {
    return this.nutritionistService.getDashboard();
  }

  @Post('/createnutritionsis')
  createnutritionsis(@Body() ndto: NutritionistForm): any {
    return this.nutritionistService.createNutritionsist(ndto);
  }

  @Get('/findnutritionist/:id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.getNutritionistByID(id);
  }

  @Get('/findnutritionist')
  getUserByIDName(@Query() qry: any): any {
    return this.nutritionistService.getNutritionistByName(qry);
  }

  @Put('/updatenutritionist/')
  updatenutritionist(@Body('name') name: string, @Body('id') id: number): any {
    return this.nutritionistService.updateNutritionist(name, id);
  }

  @Put('/updatenutritionist/:id')
  @UsePipes(new ValidationPipe())
  updatenutritionistbyid(
    @Body() ndto: NutritionistForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.nutritionistService.updateNutritionistByID(ndto, id);
  }

  @Delete('/deleteuser/:id')
  deleteNutritionistByID(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.deleteNutritionistByID(id);
  }

  @Post('/createblog')
  createblog(@Body() blogdto: NutritionistBlogForm): any {
    return this.nutritionistService.createblog(blogdto);
  }

  @Get('/findblog/:id')
  getBlogByID(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.getBlogByID(id);
  }

  @Put('/updateblog/:id')
  @UsePipes(new ValidationPipe())
  updateUserbyid(
    @Body() blogdto: NutritionistBlogForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.nutritionistService.updateBlogByID(blogdto, id);
  }

  @Delete('/deleteblog/:id')
  deleteBlog(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.deleteBlog(id);
  }
}
