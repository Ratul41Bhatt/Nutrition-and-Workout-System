import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import {  TrainerEntity, ExerciseEntity, WorkoutEntity } from './trainer.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ TrainerEntity, ExerciseEntity, WorkoutEntity])],

  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}