import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainerModule } from './Trainer/trainer.module';
import { AdminModule } from "./admin/admin.module";
import { NutritionistModule } from "./Nutritionist/nutritionist.module";
import { UserModule } from "./user/user.module";


@Module({
  imports: [AdminModule, NutritionistModule, TrainerModule, UserModule, TypeOrmModule.forRoot(
      { 
       type: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'root',
       database: 'postgres',
       autoLoadEntities: true,
       synchronize: true,
     }
  ),],
  controllers: [AppController],

  providers: [AppService],
})

export class AppModule {}
