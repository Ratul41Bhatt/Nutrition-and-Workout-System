import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NutritionistModule } from './Nutritionist/nutritionist.module';

@Module({
  imports: [NutritionistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
