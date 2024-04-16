import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTeacherDto {
   
    @IsString()
    @IsNotEmpty()
    create_date: Date;
    
    @IsString()
    @IsNotEmpty()
    modify_date: Date;

    @IsNotEmpty()
    @IsNumber()
    voided: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    specialize: string;


    @IsString()
    @IsNotEmpty()
     image: string;

    
}
