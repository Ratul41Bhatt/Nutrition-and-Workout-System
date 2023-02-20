import { Module } from '@nestjs/common';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';

import { TrainerEntity } from './trainer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerEntity])],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}