import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutEntity, ExerciseEntity } from 'src/Trainer/trainer.entity';
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
    @InjectRepository(WorkoutEntity)
    private workoutRepo: Repository<WorkoutEntity>,
    @InjectRepository(ExerciseEntity)
    private exercise: Repository<ExerciseEntity>,
    @InjectRepository(QuestionEntity)
    private QuestionRepo: Repository<QuestionEntity>,
  ) {}

  getIndex():any {
    return "User Index";
  }

  getDashboard():any {
    return "User Dashboard";
  }

  getNutritionistList():string {
    return "Get All Nutritionist Info";
  }

  getTrainerList():any {
    return "Get All Trainer Info";
  }

  getNutritionist(qry):any {
    return "Location: "+qry.location+" and Hours:"+qry.hours;
  }

  getTrainer(qry):any {
    return "Location: "+qry.location+" and Hours:"+qry.hours;
  }

  getWorkout():any {
    return this.workoutRepo.find();
  }

  getexercisesByWorkoutName(name):any {
    return  this.workoutRepo.find({
      where: {workoutname: name},
      relations: {
        exercises: true,
      },
    });
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
    Questions.clientId = quesDto.clientId;
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

  getQuestionById(id):any {
    return this.ClientRepo.find({
      where: { id: id },
      relations: {
        questions: true
      },
    });
  }

  getQuestionByName(name):any {
    return this.ClientRepo.find({
      where: { name: name },
      relations: {
        questions: true
      },
    });
  }
}
