import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { NutritionistEntity } from './entity/nutritionistentity.entity';
import { NutritionistForm } from './dto/nutritionistform.dto';
import { NutritionistDietForm } from './dto/nutritionistDietForm.dto';
import { NutritionistDietEntity } from './entity/nutritionistDiet.entity';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer/dist';

import { Email } from './dto/email.dto';

@Injectable()
export class NutritionistService {
  constructor(
    @InjectRepository(NutritionistEntity)
    private NRepo: Repository<NutritionistEntity>,
    @InjectRepository(NutritionistDietEntity)
    private NDRepo: Repository<NutritionistDietEntity>,
    private mailerService: MailerService,
  ) {}

  //Available user
  async getIndex(id: number): Promise<any> {
    const userInfo = await this.NRepo.findOneBy({ id: id });
    if (userInfo != null) {
      return userInfo;
    } else {
      return 'No data found';
    }
  }

  //NDashboard
  async getDashboard(id: number): Promise<any> {
    const userInfo = await this.NRepo.findOneBy({ id: id });
    if (userInfo != null) {
      return userInfo;
    } else {
      return 'No data found';
    }
  }

  //Signup
  // async signup(ndto: NutritionistForm): Promise<any> {
  //   try {
  //     const salt = await bcrypt.genSalt();
  //     const hassedpassed = await bcrypt.hash(ndto.password, salt);
  //     ndto.password = hassedpassed;
  //     return this.NRepo.save(ndto);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async upload(nDto) {
    const salt = await bcrypt.genSalt(10);
    const hassedpassed = await bcrypt.hash(nDto.password, salt);
    nDto.password = hassedpassed;
    return this.NRepo.save(nDto);
  }

  //Signin
  async signin(ndto: NutritionistForm): Promise<any> {
    console.log(ndto.password);
    const mydata = await this.NRepo.findOneBy({ email: ndto.email });
    const isMatch = await bcrypt.compare(ndto.password, mydata.password);
    if (isMatch) {
      return await this.NRepo.findOneBy({ email: ndto.email });
    } else {
      return 0;
    }
  }

  //Find by ID
  async getNutritionistByID(id: number): Promise<any> {
    const Ninfo = await this.NRepo.findOneBy({ id: id });
    if (Ninfo != null) {
      return Ninfo;
    } else {
      return 'No Nutritionist found';
    }
  }

  //Find by query
  getNutritionistByName(qry: any): any {
    return 'Nutritionist id is ' + qry.id + 'and Name is ' + qry.name;
  }

  //UpdateN
  async updateNutritionist(ndto: NutritionistForm, id: number): Promise<any> {
    return await this.NRepo.update(id, ndto);
  }

  //Delete
  async deleteNutritionistByID(id: number): Promise<any> {
    return await this.NRepo.delete(id);
  }

  //Create plan
  async createplan(dietdto: NutritionistDietForm): Promise<any> {
    try {
      const ndAccount = new NutritionistDietEntity();
      ndAccount.clientId = dietdto.clientId;
      ndAccount.foodList = dietdto.foodList;
      ndAccount.schedule = dietdto.schedule;
      return await this.NDRepo.save(ndAccount);
    } catch (error) {
      console.log(error);
    }
  }

  //Get plan
  async getPlanByID(id: number): Promise<any> {
    const NDinfo = await this.NDRepo.findOneBy({ id: id });
    if (NDinfo != null) {
      return NDinfo;
    } else {
      return 'No Plan found';
    }
  }

  //Update plan
  async updatePlanByID(
    dietdto: NutritionistDietForm,
    id: number,
  ): Promise<any> {
    return await this.NDRepo.update(id, dietdto);
  }

  //Delete plan
  async deletePlan(id: number): Promise<any> {
    return await this.NDRepo.delete(id);
  }

  //Send mail
  async sendEmail(mydata) {
    return await this.mailerService.sendMail({
      to: mydata.email,
      subject: mydata.subject,
      text: mydata.text,
    });
  }
}

// updateNutritionistByID(ndto: NutritionistForm, id: number): any {
//   return (
//     'Update admin where id ' +
//     id +
//     ' and change name to ' +
//     ndto.firstname +
//     ' email: ' +
//     ndto.email +
//     ' Password: ' +
//     ndto.password
//   );
// }
