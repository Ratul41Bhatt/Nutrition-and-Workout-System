import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./Customer.entity";



@Module({
imports: [TypeOrmModule.forFeature([CustomerEntity])],
controllers: [],
providers: [],

})

export class CustomerModule {}