import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLessonDto {
    // @IsString()
    // @IsNotEmpty()
    create_date: Date
  
    // @IsString()
    // @IsNotEmpty()
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
