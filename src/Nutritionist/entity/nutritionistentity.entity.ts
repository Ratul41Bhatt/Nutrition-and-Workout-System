import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nutritionist')
export class NutritionistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  address: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  nid: number;

  @Column()
  dob: string;

  @Column()
  password: string;
}
