import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  create_date: Date;

  @IsString()
  @IsNotEmpty()
  modify_date: Date;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  voided: number;

  @IsNotEmpty()
  @IsNumber()
  teacher_id: number;
}
