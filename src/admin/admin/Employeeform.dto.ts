import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Min,Matches} from "class-validator";
import { Type } from "class-transformer";
export class EmployeeForm{
    

    @IsNotEmpty({message: "Name cannot be empty"})
    @IsString({message: "Cannot accept this type name"})
    @Length(3,40, {message: "Name of length must have at least 3 letters or maximum 40 letters"})
    name: string;

    @IsNotEmpty({message: "Email cannot be empty"})
    @IsEmail({}, {message: "Invalid Email"})
    email: string;

    @IsNotEmpty({message: "Password must be fill up"})
    @Matches(RegExp('^[a-zA-Z0-9\\-]+$'))
    @Type(() => String)
    @IsString({message: "Cannot accept this type password"})
    @Length(8,25, {message: "Password must have at least 8 characters and maximum 25 characters"})
    password: string;

    @IsNotEmpty({message: "Age must be fill up"})
    @IsInt({message: "Invalid age"})
    @Type(() => Number)
    @Min(16, {message: "You must be at least 16+ for join"})
    age: number;
    
   
    @IsInt({message: "Invalid phone number"})
    @Type(() => Number)
    @Min(11, {message: "Phone number must be 11 digits"})
    phone: number;
    // @IsNotEmpty({message: "Phone cannot be empty"})
    // @IsInt({message: "Cannot accept this type phone"})
    // @Length(11,11, {message: "Phone number must be 11 digits"})
    // phone: number;
}