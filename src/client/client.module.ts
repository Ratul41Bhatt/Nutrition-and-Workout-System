import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { NutritionistDietEntity } from 'src/Nutritionist/entity/nutritionistDiet.entity';
import { NutritionistEntity } from 'src/Nutritionist/entity/nutritionistentity.entity';
import { NutritionistService } from 'src/Nutritionist/nutritionist.service';
import { ExerciseEntity, TrainerEntity, WorkoutEntity } from 'src/Trainer/trainer.entity';
import { TrainerService } from 'src/Trainer/trainer.service';


import { ClientController } from './client.controller';
import { ClientEntity } from './client.entity';
import { ClientService } from './client.service';
import { QuestionEntity } from './question.entity';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'emonsingha209@gmail.com',
          pass: 'pjwvkevgjvozlose',
        },
      },
    }),
    TypeOrmModule.forFeature([ClientEntity, WorkoutEntity, ExerciseEntity, NutritionistEntity, NutritionistDietEntity, TrainerEntity, QuestionEntity])],
  controllers: [ClientController],
  providers: [ClientService, TrainerService, NutritionistService]
})
export class ClientModule {}
