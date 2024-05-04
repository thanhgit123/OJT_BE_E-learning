import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length, Matches } from "class-validator";

export class RegisterDto {

    create_date: Date;

    modify_date: Date;

    @IsString()
    @IsNotEmpty()
    full_name: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/(\+84[3|5|7|8|9])+([0-9]{8,9})\b/ , { message: 'Số điện thoại không hợp lệ' })
    phone: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: 'Sai định dạng mật khẩu' })
    password: string;

    
}