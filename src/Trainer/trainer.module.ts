import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import {  TrainerEntity, ExerciseEntity, WorkoutEntity } from './trainer.entity';

import { MailerModule } from "@nestjs-modules/mailer";

@Module({
  imports: [
  MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
               port: 465,
               ignoreTLS: true,
               secure: true,
               auth: {
                   user: 'snasir2194@gmail.com',
                   pass: 'zohzbcasbousdrtu'
               },
              }
  }),
   
TypeOrmModule.forFeature([ExerciseEntity, WorkoutEntity])],
controllers: [TrainerController],
providers: [TrainerService],
})
export class TrainerModule {}