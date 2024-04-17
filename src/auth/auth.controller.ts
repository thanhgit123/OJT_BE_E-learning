import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/auth.dto';
import { UsersService } from 'src/modules/users/users.service';

@Controller('apis/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

    private readonly userService: UsersService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() body: any) {
    const { phone } = body;
    
    /** kiem tra email co ton tai bd hay khong */
    const user = await this.userService.getUserByEmail(phone);
    console.log(user);
    

    if (user) {
      throw new HttpException('user đã tồn tại', HttpStatus.BAD_REQUEST);
    }
    return this.authService.signUp(body);
  }

  @Post('sign-in')
  @HttpCode(201)
  async signIn(@Body() body) {
    /**  */

    const data = await this.authService.signIn(body);

    return {
      message: 'Đăng nhập thành công',
      data: data,
    };
  }
}
