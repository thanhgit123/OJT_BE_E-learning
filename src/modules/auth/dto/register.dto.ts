import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RegisterDto {

    @IsNotEmpty()
    full_name: string;

    @IsString()
    phone: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}