import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class NutritionistForm {
  //Firstname
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Cannot accept this type name' })
  firstname: string;

  //Lastname
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Cannot accept this type name' })
  lastname: string;

  //Address
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Cannot accept this type name' })
  @Length(3, 40, {
    message:
      'Name of length must have at least 3 letters or maximum 40 letters',
  })
  address: string;

  //Phone
  @IsNotEmpty({ message: 'Phone cannot be empty' })
  @IsInt({ message: 'Cannot accept this type name' })
  // @Length(11, 11, {
  //   message: 'Phone must have 11 numbers',
  // })
  phone: number;

  //Email
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Invalid Email' })
  email: string;

  //Nid
  @IsNotEmpty({ message: 'Nid cannot be empty' })
  @IsInt({ message: 'Cannot accept this type name' })
  // @Length(11, 11, {
  //   message: 'Nid must have 11 numbers',
  // })
  nid: number;

  //Date of Birth
  @IsNotEmpty({ message: 'Phone cannot be empty' })
  @IsString()
  dob: string;

  //Password
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @IsString({ message: 'Please read the requrements for password' })
  @Length(8, 25, {
    message: 'Password should be between 8 to 25 characters',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  filename: string;
}
