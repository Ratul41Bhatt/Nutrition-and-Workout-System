import { Injectable } from '@nestjs/common';
import { NutritionistBlogForm, NutritionistForm } from './nutritionistForm.dto';

@Injectable()
export class NutritionistService {
  getIndex(): string {
    return 'Nutritionist Index';
  }

  getDashboard(): string {
    return 'Nutritionist dashboard';
  }

  createNutritionsist(ndto: NutritionistForm): any {
    return 'Nutritionist Inserted name: ' + ndto.name + ' and id is ' + ndto.id;
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

  updateNutritionistByID(name: string, id: number): any {
    return 'Update Nutritionist where id ' + id + ' and change name to ' + name;
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
}
