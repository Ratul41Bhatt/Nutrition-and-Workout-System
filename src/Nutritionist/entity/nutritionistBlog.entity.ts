import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nutritionist')
export class NutritionistBlogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
