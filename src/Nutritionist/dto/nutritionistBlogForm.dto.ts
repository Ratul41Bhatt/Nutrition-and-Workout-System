import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

export class NutritionistBlogForm {
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @IsInt({ message: 'Invalid user ID' })
  id: number;

  @IsNotEmpty({ message: 'Title must be fill up' })
  title: string;

  @IsNotEmpty({ message: 'This field cannot be empty' })
  @MaxLength(2000, { message: 'Cannot write more than 2000 words' })
  description: string;
}
