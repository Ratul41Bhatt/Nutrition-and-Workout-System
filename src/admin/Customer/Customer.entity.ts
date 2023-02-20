import { EmployeeEntity } from 'src/Admin/Admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("customer")
export class CustomerEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.customers)
    employee: EmployeeEntity

}