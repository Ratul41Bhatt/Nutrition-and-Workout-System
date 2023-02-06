import { Module } from '@nestjs/common';
import { NutritionistController } from './nutritionist.controller';
import { NutritionistService } from './nutritionist.service';

@Module({
  controllers: [NutritionistController],
  providers: [NutritionistService],
})
export class NutritionistModule {}
