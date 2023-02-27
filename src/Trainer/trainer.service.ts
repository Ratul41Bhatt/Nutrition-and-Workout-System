import { Injectable } from '@nestjs/common';
import { ExerciseForm, WorkoutForm } from './trainerForm.dto';
import {ExerciseEntity, WorkoutEntity} from './trainer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class TrainerService {

  constructor(
    @InjectRepository(ExerciseEntity)
    private exerciserepo: Repository<ExerciseEntity>,
    @InjectRepository(WorkoutEntity)
    private workoutrepo: Repository<WorkoutEntity>) {}

    
  getIndex(): string 
  {
    return 'Trainer Index';
  }

  getDashboard(): string 
  {
    return 'Trainer dashboard';
  }

  createWorkout(dto: WorkoutForm): any 
  {
    return this.workoutrepo.save(dto);
  }


  getWorkoutByID(id: number): any
  {
    return this.workoutrepo.find({ 
      where: {id:id},
  //relations: {
   //   : true,
  //  },
  });
  }

  updateWorkout(mydto:WorkoutForm,id): any
  {
    return this.workoutrepo.update(id,mydto);
  }

  deleteWorkout(id): any 
  {
    return this.workoutrepo.delete(id);
  }
///////////////////////////////////////////////
 



 

  
  updateExercise(name: string, id: number): any {
    return 'Trainer updated name: ' + name + ' and id is ' + id;
  }

  updateExerciseByID(name: string, id: number): any {
    return 'Update Trainer where id ' + id + ' and change name to ' + name;
  }

  deleteExerciseByID(id: number): any {
    return 'Delete id is ' + id;
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

  
  insertexercise(mydto:ExerciseForm):any 
  {
    
    return this.exerciserepo.save(mydto);
  }

  getworkoutlist():any
  {
    return this.workoutrepo.find();
  }
  
}
