import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserClipboardService } from './user_clipboard.service';
import { CreateUserClipboardDto } from './dto/create-user_clipboard.dto';
import { UpdateUserClipboardDto } from './dto/update-user_clipboard.dto';

@Controller('user-clipboard')
export class UserClipboardController {
  constructor(private readonly userClipboardService: UserClipboardService) {}

  @Post()
  create(@Body() createUserClipboardDto: CreateUserClipboardDto) {
    return this.userClipboardService.create(createUserClipboardDto);
  }

  @Get()
  findAll() {
    return this.userClipboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userClipboardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserClipboardDto: UpdateUserClipboardDto) {
    return this.userClipboardService.update(+id, updateUserClipboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userClipboardService.remove(+id);
  }
}
