import { Injectable } from '@nestjs/common';
import { TrainerBlogForm, TrainerForm, WorkoutForm } from './trainerForm.dto';
import {TrainerEntity} from './trainer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class TrainerService {

  constructor(@InjectRepository(TrainerEntity)
    private workoutRepo: Repository<TrainerEntity>,) {}

  getIndex(): string {
    return 'Trainer Index';
  }

  getDashboard(): string {
    return 'Trainer dashboard';
  }

  createTrainer(ndto: TrainerForm): any {
    return 'Trainer Inserted name: ' + ndto.name + ' and id is ' + ndto.id;
  }

  getTrainerByID(id: number): any {
    return 'Trainer id is ' + id;
  }

  getTrainerByName(qry: any): any {
    return 'Trainer id is ' + qry.id + 'and Name is ' + qry.name;
  }

  updateTrainer(name: string, id: number): any {
    return 'Trainer updated name: ' + name + ' and id is ' + id;
  }

  updateTrainerByID(name: string, id: number): any {
    return 'Update Trainer where id ' + id + ' and change name to ' + name;
  }

  deleteTrainerByID(id: number): any {
    return 'Delete id is ' + id;
  }

  createblog(blogdto: TrainerBlogForm): any {
    return (
      'Title: ' +
      blogdto.title +
      ' Desc: ' +
      blogdto.description +
      'Id: ' +
      blogdto.id
    );
  }

  getBlogByID(id: number): any {
    return 'Blog id is ' + id;
  }

  updateBlogByID(title: string, description: string, id: number): any {
    return (
      'blog updated title: ' +
      title +
      ' update description ' +
      description +
      ' blog id: ' +
      id
    );
  }

  deleteBlog(id: number): any {
    return 'Delete id is ' + id;
  }

  
  insertexercise(mydto:WorkoutForm):any {
    
    return this.workoutRepo.save(mydto);
       }
  
}
