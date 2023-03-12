import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';


export class ExerciseForm 
{
  
  @IsNotEmpty()
  @IsString()
  exercisename: string;

  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID ID' })
 
  sets: number;

  @IsNotEmpty()
  @IsInt({ message: 'ERROR: INVALID ID' })
  
  reps: number;

@IsNotEmpty()
 @IsInt({ message: 'ERROR: INVALID ID' })
 
 workoutId: number;
  
 
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

export class TrainerForm
{

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(3,10)
  password: string;

  @IsNotEmpty()
  @IsInt()
  @MaxLength(11)
  @MinLength(11)
  contact: number;
 


} 