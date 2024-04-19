import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLessonDto {
  
    create_date: Date
  
    modify_date: Date

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    video:string

    @IsNumber()
    @IsNotEmpty()
    chapter_id: number;
}
