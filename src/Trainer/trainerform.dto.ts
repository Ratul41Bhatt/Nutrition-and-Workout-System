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

export class TrainerBlogForm {
  @IsNotEmpty({ message: 'ERROR: THIS FIELD CANNOT BE EMPTY' })
  @IsInt({ message: 'ERROR:  CANNOT BE EMPTY' })
  id: number;

  @IsNotEmpty({ message: 'ERROR: TITLE CANNOT BE EMPTY' })
  title: string;

  @IsNotEmpty({ message: 'ERROR: THIS FIELD CANNOT BE EMPTY' })
  @MaxLength(1000, { message: 'ERROR: CANNOT WRITE MORE THAN 1000 WORDS' })
  description: string;
}

export class WorkoutForm {
  
  

  @IsNotEmpty()
  exercisename: string;

  @IsNotEmpty()
  sets: number;

  @IsNotEmpty()
  reps: number;


}