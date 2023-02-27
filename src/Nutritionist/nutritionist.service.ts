import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { NutritionistEntity } from './nutritionistentity.entity';
import { NutritionistBlogForm, NutritionistForm } from './nutritionistForm.dto';

@Injectable()
export class NutritionistService {
  constructor(
    @InjectRepository(NutritionistEntity)
    private NRepo: Repository<NutritionistEntity>,
  ) {}

  getIndex(): any {
    return this.NRepo.find();
  }

  getDashboard(): string {
    return 'Nutritionist dashboard';
  }

  createNutritionsist(ndto: NutritionistForm): any {
    const nAccount = new NutritionistEntity();
    nAccount.name = ndto.name;
    nAccount.email = ndto.email;
    nAccount.password = ndto.password;
    return this.NRepo.save(nAccount);
  }

  getNutritionistByID(id: number): any {
    return 'Nutritionist id is ' + id;
  }

  getNutritionistByName(qry: any): any {
    return 'Nutritionist id is ' + qry.id + 'and Name is ' + qry.name;
  }

  updateNutritionist(name: string, id: number): any {
    return 'Nutritionist updated name: ' + name + ' and id is ' + id;
  }

  updateNutritionistByID(ndto: NutritionistForm, id: number): any {
    return (
      'Update admin where id ' +
      id +
      ' and change name to ' +
      ndto.name +
      ' email: ' +
      ndto.email +
      ' Password: ' +
      ndto.password
    );
  }

  deleteNutritionistByID(id: number): any {
    return 'Delete id is ' + id;
  }

  createblog(blogdto: NutritionistBlogForm): any {
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

  updateBlogByID(blogdto: NutritionistBlogForm, id: number): any {
    return (
      'blog updated title: ' +
      blogdto.title +
      ' update description ' +
      blogdto.description +
      ' blog id: ' +
      id
    );
  }

  deleteBlog(id: number): any {
    return 'Delete id is ' + id;
  }
}
