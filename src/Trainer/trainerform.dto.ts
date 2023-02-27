import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';


export class ExerciseForm 
{
  
  @IsNotEmpty()
  exercisename: string;

  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID ID' })
  sets: number;

  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID ID' })
  reps: number;

}


export class WorkoutForm
{
  @IsNotEmpty()
  workoutname: string;
  
  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID' })
  @Length(1, 10, {message: 'ERROR: Sets SHOULD be between 1 and 10',})
  time: number
}