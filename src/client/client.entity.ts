import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionEntity } from "./question.entity";

@Entity("client")
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @OneToMany (() => QuestionEntity, (question) => question.client)
    questions: QuestionEntity[]
}