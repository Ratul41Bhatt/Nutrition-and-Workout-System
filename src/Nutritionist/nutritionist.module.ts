import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { NutritionistController } from './nutritionist.controller';
import { NutritionistService } from './nutritionist.service';
import { NutritionistEntity } from './entity/nutritionistentity.entity';
import { NutritionistDietEntity } from './entity/nutritionistDiet.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { ClientEntity } from 'src/client/client.entity';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'ahmedadibctg@gmail.com',
          pass: 'tmzmccfausbigxwq',
        },
      },
    }),

    TypeOrmModule.forFeature([
      NutritionistEntity,
      NutritionistDietEntity,
      ClientEntity,
    ]),
  imports: [TypeOrmModule.forFeature([NutritionistEntity, NutritionistDietEntity]),
  ],
  controllers: [NutritionistController],
  providers: [NutritionistService],
})
export class NutritionistModule {}
