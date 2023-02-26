import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class TrainerForm {
  @IsNotEmpty({ message: 'ERROR: ID CANNOT BE EMPTY' })
  @IsInt({ message: 'ERROR: INVALID ID' })
  id: number;

  @IsNotEmpty({ message: 'ERROR: ID CANNOT BE EMPTY' })
  @IsString({ message: 'ERROR: NAME CANNOT BE AN INTEGER' })
  @Length(3, 20, {
    message:
      'ERROR: NAME MUST BE GREATER THAN 3',
  })
  name: string;

  @IsNotEmpty({ message: 'ERROR: EMAIL CANNOT BE EMPTY' })
  @IsEmail({}, { message: 'ERROR: INVALID ID' })
  email: string;

  @IsNotEmpty({ message: 'ERROR: PASSWORD CANNOT BE EMPTY' })
  @IsString({ message: 'ERROR' })
  @Length(8, 20, {
    message: 'ERROR: PASSWORD SHOULD CONTAIN AT LEAST 8 CHARACTERS',
  })
  password: string;
}



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