import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChapterDto {

    
    create_date: Date;
  
    modify_date: Date;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    course_id:string
}
