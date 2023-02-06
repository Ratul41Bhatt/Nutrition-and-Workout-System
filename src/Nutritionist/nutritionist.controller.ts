import { Controller, Get } from '@nestjs/common';
import { NutritionistService } from './nutritionist.service';

@Controller('/nutritionist')
export class NutritionistController {
  constructor(private nutritionistService: NutritionistService) {}

  @Get('/index')
  getNutritionist(): any {
    return this.nutritionistService.getIndex();
  }
}
