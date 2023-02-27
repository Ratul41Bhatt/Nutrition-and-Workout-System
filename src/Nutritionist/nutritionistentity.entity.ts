import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nutritionist')
export class NutritionistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
