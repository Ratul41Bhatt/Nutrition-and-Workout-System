//import { UserEntity } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany,ManyToOne } from 'typeorm';

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
  
@ManyToOne(() => WorkoutEntity, (workout) => workout.exercise)
workout: ExerciseEntity  

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

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.workout)
  exercise: WorkoutEntity[]

}