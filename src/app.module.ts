import { Module } from '@nestjs/common';
import { NutritionistModule } from './Nutritionist/nutritionist.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,NutritionistModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
