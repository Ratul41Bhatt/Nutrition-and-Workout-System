import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
// import { CustomerEntity } from 'src/Customer/Customer.entity';
@Entity("Admin")
export class AdminEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  phone: number;

  // @OneToMany(() => CustomerEntity, (customer) => customer.employee)
  // customers: CustomerEntity[]

}