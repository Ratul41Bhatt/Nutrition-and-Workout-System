import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class NutritionistForm {
  @IsNotEmpty({ message: 'ID cannot be empty' })
  @IsInt({ message: 'Invalid user ID' })
  id: number;

  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Cannot accept this type name' })
  @Length(3, 40, {
    message:
      'Name of length must have at least 3 letters or maximum 40 letters',
  })
  name: string;

  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Invalid Email' })
  email: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  @IsString({ message: 'Please read the requrements for password' })
  @Length(8, 25, {
    message: 'Password should be between 8 to 25 characters',
  })
  password: string;
}

export class NutritionistBlogForm {
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @IsInt({ message: 'Invalid user ID' })
  id: number;

  @IsNotEmpty({ message: 'Title must be fill up' })
  title: string;

  @IsNotEmpty({ message: 'This field cannot be empty' })
  @MaxLength(2000, { message: 'Cannot write more than 2000 words' })
  description: string;
}

// @IsNotEmpty({message: "Age must be fill up"})
// @IsInt({message: "Invalid age"})
// @Min(16, {message: "You must be at least 16+ for join"})
// age: number;
