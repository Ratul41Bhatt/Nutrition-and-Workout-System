import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { NutritionistController } from './nutritionist.controller';
import { NutritionistService } from './nutritionist.service';
import { NutritionistEntity } from './entity/nutritionistentity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NutritionistEntity])],
  controllers: [NutritionistController],
  providers: [NutritionistService],
})
export class NutritionistModule {}
