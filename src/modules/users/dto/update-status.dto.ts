import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
export class UpdateStatusDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsBoolean()
    is_active: boolean;
}