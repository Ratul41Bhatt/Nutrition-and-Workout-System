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
  @IsString()
  exercisename: string;

  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID ID' })
  @Length(1,2,{message: 'ERROR'})
  sets: number;

  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID ID' })
  @Length(1,2,{message: 'ERROR'})
  reps: number;

}


export class WorkoutForm
{
  @IsNotEmpty()
  @IsString()
  workoutname: string;
  
  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID' })
  @Length(1, 2, {message: 'ERROR: Sets SHOULD be between 1 and 10',})
  time: number
}