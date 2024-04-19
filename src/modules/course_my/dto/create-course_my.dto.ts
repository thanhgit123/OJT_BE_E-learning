import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseMyDto {
    
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    course_id: string;
}
