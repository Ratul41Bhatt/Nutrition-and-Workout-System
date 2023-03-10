import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientEntity } from './client.entity';

import { ClientForm } from "./clientform.dto";
import { ClientUpdateForm } from './clientupdateform.dto';
import { QuestionForm } from './question.dto';
import { QuestionEntity } from './question.entity';
import * as bcrypt from 'bcrypt';

import { MailerService } from '@nestjs-modules/mailer/dist';
import { ExerciseEntity, TrainerEntity, WorkoutEntity } from 'src/Trainer/trainer.entity';
import { NutritionistEntity } from 'src/Nutritionist/entity/nutritionistentity.entity';
import { NutritionistDietEntity } from 'src/Nutritionist/entity/nutritionistDiet.entity';

@Injectable()
export class ClientService {
  constructor (
    @InjectRepository(ClientEntity)
    private ClientRepo: Repository<ClientEntity>,

    @InjectRepository(WorkoutEntity)
    private workoutRepo: Repository<WorkoutEntity>,

    @InjectRepository(ExerciseEntity)
    private exerciseRepo: Repository<ExerciseEntity>,

    @InjectRepository(QuestionEntity)
    private QuestionRepo: Repository<QuestionEntity>,

    @InjectRepository(TrainerEntity)
    private TrainerRepo: Repository<TrainerEntity>,

    @InjectRepository(NutritionistEntity)
    private NutritionistRepo: Repository<NutritionistEntity>,

    @InjectRepository(NutritionistDietEntity)
    private NutritionistDietRepo: Repository<NutritionistDietEntity>,

    private mailerService: MailerService
  ) {}

  getIndex():any {
    return "User Index";
  }

  getDashboard():any {
    return "User Dashboard";
  }

  getNutritionistList():any {
    return this.NutritionistRepo.find();
  }

  getTrainerList():any {
    return this.TrainerRepo.find();
  }

  getNutritionist(name):any {
    return this.NutritionistRepo.find({ 
      where: {firstname:name},
    })
  }

  getTrainer(name):any {
    return this.TrainerRepo.find({ 
      where: {firstname:name},
    })
  }

  getWorkout():any {
    return this.workoutRepo.find();
  }

  getWorkoutByID(id: number): any
  {
    return this.workoutRepo.find({ 
      where: {id:id},
      
    })
  }

  getWorkoutByName(name): any
  {
    return this.workoutRepo.find({ 
      where: {workoutname:name},
    })
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

  async signup(clientDto) {
    const salt = await bcrypt.genSalt(10);
    const hassedpassed = await bcrypt.hash(clientDto.password, salt);
    clientDto.password = hassedpassed;
    return this.ClientRepo.save(clientDto);
  }

  async signin(clientDto) {
    const data = await this.ClientRepo.findOneBy({email: clientDto.email});
    const isMatch = await bcrypt.compare(clientDto.password, data.password);
    if(isMatch) {
      return 1;
    }
    else
    {
      return 0;
    }
  }

  async emailSending(clientdata) {
    return await this.mailerService.sendMail({
      to: clientdata.email,
      subject: clientdata.subject,
      text: clientdata.text,
    });
  }
}
