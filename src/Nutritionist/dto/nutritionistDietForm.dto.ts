import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

export class NutritionistDietForm {
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @IsInt({ message: 'Invalid user ID' })
  clientId: number;

  @IsNotEmpty({ message: 'This item must be fill up' })
  foodList: string;

  @IsNotEmpty({ message: 'This field cannot be empty' })
  @MaxLength(2000, { message: 'Cannot write more than 2000 words' })
  schedule: string;

  planNoId: number;
}
