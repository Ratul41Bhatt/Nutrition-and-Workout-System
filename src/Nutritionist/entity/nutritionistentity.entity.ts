import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NutritionistDietEntity } from './nutritionistDiet.entity';

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

  // @OneToMany(() => NutritionistDietEntity, (DietPlan) => DietPlan.planNo)
  // DietPlan: NutritionistDietEntity[];
}
