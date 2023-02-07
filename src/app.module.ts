import { Module } from '@nestjs/common';
import { NutritionistModule } from './Nutritionist/nutritionist.module';

@Module({
  imports: [NutritionistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
