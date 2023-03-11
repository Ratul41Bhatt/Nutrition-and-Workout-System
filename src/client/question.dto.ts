import { IsNotEmpty, IsString, Length } from "class-validator";
export class QuestionForm{
    @IsNotEmpty({message: "Question cannot be empty"})
    @IsString({message: "Cannot accept this type question"})
    @Length(0,200, {message: "Too long question. Maximum 200 words can be accepted."})
    question: string;

    @IsNotEmpty({message: "Name cannot be empty"})
    @IsString({message: "Cannot accept this type name"})
    @Length(3,40, {message: "Name of length must have at least 3 letters or maximum 40 letters"})
    questionBy: string;

    @IsNotEmpty({message: "Client Empty"})
    clientId: number;
}