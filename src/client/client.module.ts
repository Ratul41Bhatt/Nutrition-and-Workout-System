import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';


import { ClientController } from './client.controller';
import { ClientEntity } from './client.entity';
import { ClientService } from './client.service';
import { QuestionEntity } from './question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, QuestionEntity])],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
