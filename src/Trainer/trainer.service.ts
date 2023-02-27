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
       relations: {
      exercise : true,
   },
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

getworkoutlist():any
{
    return this.workoutrepo.find();
}
  
///////////////////////////////////////////////
 

createexercise(mydto:ExerciseForm):any 
{   
  return this.exerciserepo.save(mydto);
}


getExerciseByID(id: number): any
{
    return this.exerciserepo.find({ 
      where: {id:id},
       
  });
}

updateExercise(mydto:ExerciseForm,id): any
{
  return this.exerciserepo.update(id,mydto);
}

deleteExercise(id): any 
{
  return this.exerciserepo.delete(id);
}

getexerciselist():any
{
    return this.exerciserepo.find();
}

getexercisesByWorkoutID(id):any {
  return this.workoutrepo.find({ 
          where: {id:id},
      relations: {
          exercise: true,
      },
   });
}

}
