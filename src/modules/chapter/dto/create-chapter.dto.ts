import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChapterDto {

    @IsString()
    @IsNotEmpty()
    create_date: Date;
  
    @IsString()
    @IsNotEmpty()
    modify_date: Date;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    title:string

    @IsNumber()
    @IsNotEmpty()
    voided: number

   

}
