import { IsAlphanumeric, IsEmail, IsInt, IsNotEmpty, IsString, Length, Min } from "class-validator";
export class CreateForm{
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

    @IsNotEmpty({message: "ID must be fill up"})
    @IsString({message: "Cannot accept this type of id"})
    @Min(3, {message: "ID must be 3 digit"})
    id: number;
}