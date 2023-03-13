import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { NutritionistController } from './nutritionist.controller';
import { NutritionistService } from './nutritionist.service';
import { NutritionistEntity } from './entity/nutritionistentity.entity';
import { NutritionistDietEntity } from './entity/nutritionistDiet.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [TypeOrmModule.forFeature([NutritionistEntity, NutritionistDietEntity]),
  ],
  controllers: [NutritionistController],
  providers: [NutritionistService],
})
export class NutritionistModule {}
