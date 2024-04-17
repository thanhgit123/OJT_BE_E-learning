import { IsNotEmpty, IsString } from "class-validator";

export class CreateWishListDto {
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    course_id: string;
}
