import { Column, OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
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

    @Column()
    filename: string;

    @OneToMany (() => QuestionEntity, (question) => question.client)
    questions: QuestionEntity[]
}