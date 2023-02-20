//import { ClientEntity } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("Trainer")
export class TrainerEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exercisename: string;

  @Column()
  sets: number;

  @Column()
  reps: number;
  
  //@OneToMany(() => UserEntity, (user) => user.trainer)
  //managers: UserEntity[]


}