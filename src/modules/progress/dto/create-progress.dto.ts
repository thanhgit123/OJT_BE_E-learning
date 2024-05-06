import {
  IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProgressDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  lessionId: number;

  @IsNotEmpty()
  @IsNumber()
  courseId: number;

  @IsNotEmpty()
  @IsNumber()
  chapterId: number;

  @IsNotEmpty()
  @IsNumber()
  isCompleted: number;

  completedAt: Date;

  @IsNotEmpty()
  @IsString()
  notes: string;
}
