import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateStatusDto } from './dto/update-status.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('list')
  async findAll() {
    return await this.usersService.findAll();
  }
  
  @Get('getUserByPhone')
  async findUser(@Body() body: any) {
    const {phone} = body
    return await this.usersService.findUserByPhone(phone);
  }

 
 
}
