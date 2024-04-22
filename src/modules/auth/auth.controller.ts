import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { RegisterDto } from './dto/register.dto';
import { DataToken } from 'src/shared/interfaces/data-token.interface';
import { JWT_CONFIG } from 'src/constant/constants/jwt.constant';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly UserService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto);
  }

  @Post('refresh_token')
  async refreshToken(@Req() request: Request) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.UserService.create(body);
  }
}
