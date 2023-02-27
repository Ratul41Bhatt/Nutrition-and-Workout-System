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
  @Length(1, 10, {
    message: 'ERROR: Sets SHOULD be between 1 and 10',
  })
  sets: number;

  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID ID' })
  @Length(1, 10, {
    message: 'ERROR: Reps SHOULD be between 1 and 10',
  })
  repetitions: number;

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