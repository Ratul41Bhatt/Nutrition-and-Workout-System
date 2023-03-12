import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ExerciseEntity, TrainerEntity, WorkoutEntity } from 'src/Trainer/trainer.entity';
import { TrainerService } from 'src/Trainer/trainer.service';
import { ClientController } from './client.controller';
import { ClientEntity } from './client.entity';
import { ClientService } from './client.service';
import { QuestionEntity } from './question.entity';

@Module({
 imports: [TypeOrmModule.forFeature([ClientEntity, WorkoutEntity, ExerciseEntity ,TrainerEntity,  QuestionEntity])],
  controllers: [ClientController],
  providers: [ClientService, TrainerService]
})
export class ClientModule {}
