import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateStatusDto } from './dto/update-status.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  async findAllUser() {
    return await this.usersService.findAll();
  }
  
  @Get('getUserByPhone')
  async findUser(@Body() body: any) {
    const {phone} = body
    return await this.usersService.findUserByPhone(phone);
  }

  @Put('updateStatus')
  @HttpCode(200)
  async updateStatus(@Body() body: UpdateStatusDto) {
    const result =  await this.usersService.updateStatus(body);
    return{
      statusCode: 200,
      message: "Update status successfully",
      data: body
    }
  }
 
}
