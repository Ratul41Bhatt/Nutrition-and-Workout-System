import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import {  TrainerEntity, ExerciseEntity, WorkoutEntity } from './trainer.entity';


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
                     pass: 'ukwvbdgbdqdeubkf'
                 },
                }
    }),
    
    
    TypeOrmModule.forFeature([ TrainerEntity, ExerciseEntity, WorkoutEntity])],

  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}