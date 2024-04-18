import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
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
