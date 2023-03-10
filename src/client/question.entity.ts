import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("question")
export class QuestionEntity {
    @PrimaryGeneratedColumn()
    quesno: number;

    @Column()
    question: string;

    @Column()
    questionBy: string;
}