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
  user: number;

  @IsNotEmpty()
  @IsNumber()
  session: number;

  @IsNotEmpty()
  @IsNumber()
  isCompleted: number;

  completedAt: Date;

  @IsNotEmpty()
  @IsString()
  notes: string;
}
