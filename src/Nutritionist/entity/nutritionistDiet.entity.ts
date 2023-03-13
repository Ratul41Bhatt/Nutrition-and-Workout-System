import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { NutritionistEntity } from './nutritionistentity.entity';

@Entity('DietPlan')
export class NutritionistDietEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column()
  foodList: string;

  @Column()
  schedule: string;

  // @Column()
  // planNoId: number;

  // @ManyToOne(() => NutritionistEntity, (nutrotionist) => nutrotionist.DietPlan)
  // planNo: NutritionistEntity;

  // @ManyToOne(() => ClientEntity, (client) => client.questions)
  // client: ClientEntity
}
