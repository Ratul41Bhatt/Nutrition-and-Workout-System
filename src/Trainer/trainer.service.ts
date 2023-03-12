import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { ExerciseForm, WorkoutForm } from './trainerForm.dto';
import { TrainerEntity, ExerciseEntity, WorkoutEntity} from './trainer.entity';
//import { MailerService } from "@nestjs-modules/mailer/dist";

@Injectable()
export class TrainerService {

  constructor(
    @InjectRepository(ExerciseEntity)
    private exerciserepo: Repository<ExerciseEntity>,
    @InjectRepository(WorkoutEntity)
    private workoutrepo: Repository<WorkoutEntity>,
    @InjectRepository(TrainerEntity)
    private trainerrepo: Repository<TrainerEntity>
    ) {}

    
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
    
 });
}

getWorkoutByName(name): any
{
  return this.workoutrepo.find({ 
    where: {workoutname:name},
  })
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

getWorkoutByExerciseId(id):any
{
  return this.exerciserepo.find({        
    where: {id: id},
relations: {
    workout: true,
},
});
}

getWorkoutByExerciseName(name):any
{
  return this.exerciserepo.find({        
    where: {exercisename: name},
relations: {
    workout: true,
},
});
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

getExerciseByName(name): any
{
    return this.exerciserepo.find({ 
      where: {exercisename:name}
       
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
          where: {id: id},
      relations: {
          exercises: true,
      },
   });
}

getexercisesByWorkoutName(name):any {
  return this.workoutrepo.find({        
    where: {workoutname: name},
relations: {
    exercises: true,
},
});
}
 /*
addexercise(mydto: ExerciseForm):any{
  const exerciseaccount = new ExerciseEntity() 
  exerciseaccount.exercisename = mydto.exercisename;
  exerciseaccount.sets = mydto.sets;
  exerciseaccount.reps = mydto.reps;   //this was used to insert a single value without changing all values
 /exerciseaccount.workoutId = mydto.workoutId;
   return this.exerciserepo.save(exerciseaccount);
}*/

async signup(mydto) {
  const salt = await bcrypt.genSalt(8);
  const hassedpassed = await bcrypt.hash(mydto.password, salt);
  mydto.password= hassedpassed;
  return this.trainerrepo.save(mydto);
  }

  async signin(mydto){
    console.log(mydto.password);
const mydata= await this.trainerrepo.findOneBy({email: mydto.email});
const isMatch= await bcrypt.compare(mydto.password, mydata.password);
if(isMatch) {
return 1;
}
else {
    return 0;
}

}
/*
async sendEmail(mydata){
  return  this.mailerService.sendMail({
         to: mydata.email,
         subject: mydata.subject,
         text: mydata.text, 
       });
 
 }*/

}
 