import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBlogDto {
    @IsString()
    @IsNotEmpty()
    create_date: Date;

    @IsString()
    @IsNotEmpty()
    modify_date: Date;

    @IsString()
    @IsNotEmpty()
    voided:string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    @IsString()
    likes: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    user_id: string;
}
