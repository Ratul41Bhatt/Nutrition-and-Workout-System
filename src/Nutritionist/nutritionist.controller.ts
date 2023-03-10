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
  UnauthorizedException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NutritionistService } from './nutritionist.service';
import { Session, UseGuards, UsePipes } from '@nestjs/common/decorators';
import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import { NutritionistForm } from './dto/nutritionistform.dto';
import { NutritionistDietForm } from './dto/nutritionistDietForm.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SessionGuard } from './session.guard';
import { Email } from './dto/email.dto';

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

  //Signin
  @Get('/signin')
  signin(@Session() session, @Body() ndto: NutritionistForm) {
    if (this.nutritionistService.signin(ndto)) {
      session.email = ndto.email;
      // console.log(session.email);
      return { message: 'success' };
    } else {
      return { message: 'invalid credentials' };
    }
  }

  //Signout
  @Get('/signout')
  signout(@Session() session) {
    if (session.destroy()) {
      return { message: 'you are logged out' };
    } else {
      throw new UnauthorizedException('invalid actions');
    }
  }

  //FindN by ID
  @Get('/find-nutritionist/:id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.getNutritionistByID(id);
  }

  //FindN query
  @Get('/find-nutritionist')
  getUserByIDName(@Query() qry: any): any {
    return this.nutritionistService.getNutritionistByName(qry);
  }

  //UpdateN
  @Put('/update-nutritionist/:id')
  @UseGuards(SessionGuard)
  updatenutritionist(
    @Body() ndto: NutritionistForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.nutritionistService.updateNutritionist(ndto, id);
  }

  //DeleteN
  @Delete('/delete-nutritionist/:id')
  deleteNutritionistByID(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.deleteNutritionistByID(id);
  }

  //Diet Plan for client
  @Post('/create-dietplan')
  createblog(@Body() dietdto: NutritionistDietForm): any {
    return this.nutritionistService.createplan(dietdto);
  }

  //find plan
  @Get('/find-dietplan/:id')
  getBlogByID(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.getPlanByID(id);
  }

  //Update plan
  @Put('/update-dietplan/:id')
  @UsePipes(new ValidationPipe())
  updateUserbyid(
    @Body() dietdto: NutritionistDietForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.nutritionistService.updatePlanByID(dietdto, id);
  }

  //Delete plan
  @Delete('/delete-dietplan/:id')
  deleteBlog(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.deletePlan(id);
  }

  //Send mail
  @Post('/sendemail')
  sendEmail(@Body() mydata) {
    return this.nutritionistService.sendEmail(mydata);
  }

  //file upload
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
    @Body() nDto: NutritionistForm,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 200000 }),
          new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    nDto.filename = file.filename;
    return this.nutritionistService.upload(nDto);
  }

  //User info
  @Get('/userinfo/:id')
  getUser(@Param('id', ParseIntPipe) id: number): any {
    return this.nutritionistService.getUser(id);
  }

  //Get all diet plan
  @Get('/allplan')
  getAllPlan(): any {
    return this.nutritionistService.getAllPlan();
  }

  //find plan by userid
  @Get('/find-dietplan/:clientid')
  getPlanByid(@Param('clientid', ParseIntPipe) clientid: number): any {
    return this.nutritionistService.getPlanByid(clientid);
  }

  //Show all client
  @Get('/allclient')
  getClient(): any {
    return this.nutritionistService.getClient();
  }
}
