import { Transform } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length, Matches } from "class-validator"
import { Role } from "src/constant/enum";

export class LoginDto {


    @IsString()
    @IsNotEmpty()
    @Matches(/(\+84[3|5|7|8|9])+([0-9]{8,9})\b/ , { message: 'Số điện thoại không hợp lệ' })
    phone: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: 'Password not valid' })
    password: string;

    
}