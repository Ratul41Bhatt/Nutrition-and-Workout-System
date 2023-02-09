import { Module } from '@nestjs/common';
import { AdminController } from './Controller/Admin.Controller';
import { AdminService } from './services/admin/admin.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService]

})
export class AdminModule {

}