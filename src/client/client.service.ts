import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainerEntity } from 'src/Trainer/trainer.entity';
import { Repository } from 'typeorm';
import { ClientEntity } from './client.entity';

import { ClientForm } from "./clientform.dto";
import { ClientUpdateForm } from './clientupdateform.dto';
import { QuestionForm } from './question.dto';
import { QuestionEntity } from './question.entity';

@Injectable()
export class ClientService {
  constructor (
    @InjectRepository(ClientEntity)
    private ClientRepo: Repository<ClientEntity>,
    @InjectRepository(TrainerEntity)
    private workoutRepo: Repository<TrainerEntity>,
    @InjectRepository(QuestionEntity)
    private QuestionRepo: Repository<QuestionEntity>,
  ) {}

  getIndex():any {
    return this.ClientRepo.find();
  }

  getNutritionistList():string {
    return "Get All Nutritionist Info";
  }

  getTrainerList():any {
    return this.workoutRepo.find();
  }

  getNutritionist(qry):any {
    return "Location: "+qry.location+" and Hours:"+qry.hours;
  }

  getTrainer(qry):any {
    return "Location: "+qry.location+" and Hours:"+qry.hours;
  }

  NewClient(clientDto:ClientForm):any {
    const ClientAccount = new ClientEntity()
    ClientAccount.name = clientDto.name;
    ClientAccount.email = clientDto.email;
    ClientAccount.password = clientDto.password;
    ClientAccount.age = clientDto.age;
    return this.ClientRepo.save(ClientAccount);
  }

  updateClientbyId(clientDto:ClientUpdateForm, id):any {
    return this.ClientRepo.update(id, clientDto);
  }

  deleteClientbyId(id):any {
    return this.ClientRepo.delete(id);
  }

  PostQuestion(quesDto:QuestionForm):any {
    const Questions = new QuestionEntity()
    Questions.question = quesDto.question;
    Questions.questionBy = quesDto.questionBy;
    return this.QuestionRepo.save(Questions);
  }

  UpdateQuestion(quesno, quesDto:QuestionForm):any {
    return this.QuestionRepo.update(quesno, quesDto);
  }

  DeleteQuestion(quesno):any {
    return this.QuestionRepo.delete(quesno);
  }

  getAllQuestion():any {
    return this.QuestionRepo.find();
  } 
}
