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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NutritionistService } from './nutritionist.service';
import { UsePipes } from '@nestjs/common/decorators';
import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import { NutritionistForm } from './dto/nutritionistform.dto';
import { NutritionistBlogForm } from './dto/nutritionistBlogForm.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('/nutritionist')
export class NutritionistController {
  constructor(private nutritionistService: NutritionistService) {}

  // Show Available user
  @Get('/index/:id')
  getNutritionist(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.getIndex(id);
  }

  //Dashboard
  @Get('/dashboard/:id')
  getNutritionistDashboard(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.getDashboard(id);
  }

  //Signup
  @Post('/signup')
  @UseInterceptors(
    FileInterceptor('myfile', {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  signup(
    @Body() ndto: NutritionistForm,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 16000 }),
          new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    ndto.avatar = file.filename;

    return this.nutritionistService.signupN(ndto);
    console.log(file);
  }

  //Signup
  // @Post('/signup')
  // @UseInterceptors(
  //   FileInterceptor('myfile', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: function (req, file, cb) {
  //         cb(null, Date.now() + file.originalname);
  //       },
  //     }),
  //   }),
  // )
  // @UsePipes(new ValidationPipe())
  // singupN(@Body() ndto: NutritionistForm): any {
  //   return this.nutritionistService.signupN(ndto);
  // }

  //Finduser
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
