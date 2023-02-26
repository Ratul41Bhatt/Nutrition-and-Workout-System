//import { ClientEntity } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("Exercise")
export class ExerciseEntity
{
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

@Entity("Workout")
export class WorkoutEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  workoutname: string;

  @Column()
  time: number;


}