import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Min } from "class-validator";
export class EmployeeUpdateForm{
   
    @IsString({message: "Cannot accept this type name"})
    @Length(3,40, {message: "Name of length must have at least 3 letters or maximum 40 letters"})
    name: string;

    email: string;

 
    password: string;

    age: number;

    phone:number;
}