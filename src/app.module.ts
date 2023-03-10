import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TrainerModule } from './Trainer/trainer.module';
import { AdminModule } from './admin/admin/admin.module';
import { NutritionistModule } from './Nutritionist/nutritionist.module';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
@Module({
  imports: [AdminModule, NutritionistModule, TrainerModule, ClientModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: 'root',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
