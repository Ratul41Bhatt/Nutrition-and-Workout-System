import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from './Admin.controller';
import { EmployeeService } from './Admin.service';
import { AdminEntity } from "./Admin.entity"

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class AdminModule {}
