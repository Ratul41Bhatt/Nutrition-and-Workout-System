import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientEntity } from "./client.entity";

@Entity("question")
export class QuestionEntity {
    @PrimaryGeneratedColumn()
    quesno: number;

    @Column()
    question: string;

    @Column()
    questionBy: string;

    @Column()
    clientId: number;

    @ManyToOne(() => ClientEntity, (client) => client.questions)
    client: ClientEntity
}