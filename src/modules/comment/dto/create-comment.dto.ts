import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsNull } from "typeorm";

export class CreateCommentDto {
    
    create_date:Date

    modify_date:Date

    @IsString()
    @IsNotEmpty()
    content:string  

    @IsNumber()
    @IsNotEmpty()
    lesson_id:number

    @IsNumber()
    @IsNotEmpty()
    user_id:number
}
