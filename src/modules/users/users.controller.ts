import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateStatusDto } from './dto/update-status.dto';
import { AuthGuard } from 'src/guards/auth.guards';
import { RoleGuard } from 'src/shared/guard/auth.guard';
import { Role } from 'src/constant/enum';
import { Roles } from 'src/shared/decorators/role-decorator';

// @UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // request ->  middleware -> guard -> interceptor -> response
  @Get('getAllUser')
  // @UseGuards(RoleGuard)
  // @Roles(Role.ADMIN)
  @UseGuards(AuthGuard)
  async findAllUser() {
    return await this.usersService.findAll();
  }

  @Get('getUserByPhone')
  async findUser(@Body() body: any) {
    const { phone } = body;
    return await this.usersService.findUserByPhone(phone);
  }

  @Get('paginationUser')
  async paginationUser(@Query('page') page: number, @Query('limit') limit: number) {
    return await this.usersService.paginationUser(page, limit);
  }

  @Get('searchUser')
  async searchUser(@Query('key') searchValue: string) {
    return await this.usersService.searchUser(searchValue);
  }

  @Put('updateStatus')
  async updateStatus(@Body() body: UpdateStatusDto) {
    const result = await this.usersService.updateStatus(body);
    return {
      statusCode: HttpStatus.OK,  
      message: 'Update status successfully',
      data: body,
    };
  }
}
