import { IsInt, IsNotEmpty } from "class-validator";
export class AdminForm{
    @IsNotEmpty({message: "Enter id"})
    @IsInt()
    id: number;
    @IsNotEmpty({message: "Enter name"})
    name: string;
    @IsNotEmpty({message: "Enter location"})
    location: string;
    @IsNotEmpty({message: "Enter hours"})
    hours: string;
    @IsNotEmpty({message: "Enter question"})
    question: string;
}