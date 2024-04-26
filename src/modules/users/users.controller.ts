import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateStatusDto } from './dto/update-status.dto';
import { SearchUserDto } from './dto/search-user.dto';


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

  @Get('searchUser')
  async searchUser(@Query('key') searchValue : string){
    return await this.usersService.searchUser(searchValue);
  }

  @Put('updateStatus')
  async updateStatus(@Body() body: UpdateStatusDto) {
    const result =  await this.usersService.updateStatus(body);
    return{
      statusCode: HttpStatus.OK,
      message: "Update status successfully",
      data: body
    }
  }
 
}
