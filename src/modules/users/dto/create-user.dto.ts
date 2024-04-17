import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  
    create_by: string;
  
    create_date: Date;
  
    modify_date: Date;
  
    @IsNotEmpty()
    @IsString()
    full_name: string;
  
    is_active: number;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  
    @IsNotEmpty()
    @IsNumber()
    phone: string;
  
    username: string;
  
    @IsNotEmpty()
    @IsNumber()
    voided: number;
  
    active: number;
}
