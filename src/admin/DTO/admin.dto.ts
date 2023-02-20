import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Min } from "class-validator";
export class AdminForm{
    @IsNotEmpty({message: "ID not found"})
    @IsInt({message: "Invalid ID"})
    id: number;

    @IsNotEmpty({message: "Name cannot be empty"})
    @IsString({message: "Name must be alpha numeric character"})
    @Length(3,40, {message: "Name of length must have at least 3 letters or maximum 32 letters"})
    name: string;

    @IsNotEmpty({message: "Email cannot be empty"})
    @IsEmail({}, {message: "Invalid Email"})
    email: string;

    @IsNotEmpty({message: "Password must be fill up"})
    @IsString({message: "Cannot accept this type password"})
    @Length(8,25, {message: "Password must have at least 8 characters and maximum 25 characters"})
    password: string;

    @IsNotEmpty({message: "Phone number must be fill up"})
    @IsString({message: "Invalid number"})
    @Length(11,11, {message: "Phone Number must be 11 digits"})
    phone: number;
}