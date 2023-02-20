import {IsNotEmpty, IsString, Length } from "class-validator";
export class UserUpdateForm{
    @IsNotEmpty({message: "Name cannot be empty"})
    @IsString({message: "Cannot accept this type name"})
    @Length(3,40, {message: "Name of length must have at least 3 letters or maximum 40 letters"})
    name: string;

    /*

    @IsNotEmpty({message: "Email cannot be empty"})
    @IsEmail({}, {message: "Invalid Email"})
    email: string;

    @IsNotEmpty({message: "Password must be fill up"})
    @IsString({message: "Cannot accept this type password"})
    @Length(8,25, {message: "Password must have at least 8 characters and maximum 25 characters"})
    @Matches(/^[a-zA-Z0-9]+$/, {message: "Must add a number"})
    password: string;

    @IsNotEmpty({message: "Age must be fill up"})
    @IsInt({message: "Invalid age"})
    @Min(16, {message: "You must be at least 16+ for join"})
    age: number; */
}