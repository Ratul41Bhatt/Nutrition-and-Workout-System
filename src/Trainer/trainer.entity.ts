
import { Entity, Column, PrimaryGeneratedColumn, OneToMany,ManyToOne } from 'typeorm';


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
  exercises: ExerciseEntity[]
 
}


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

 @Column()
 workoutId: number ;

  
@ManyToOne(() => WorkoutEntity, (workout) => workout.exercises)
workout: WorkoutEntity  
 
}

@Entity("Trainer")
export class TrainerEntity
{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  contact: number;
 
}
