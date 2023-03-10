import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import {  ExerciseEntity, WorkoutEntity } from './trainer.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ ExerciseEntity, WorkoutEntity])],

  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}