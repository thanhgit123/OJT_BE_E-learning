import { Injectable } from '@nestjs/common';
import { CreateUserClipboardDto } from './dto/create-user_clipboard.dto';
import { UpdateUserClipboardDto } from './dto/update-user_clipboard.dto';

@Injectable()
export class UserClipboardService {
  create(createUserClipboardDto: CreateUserClipboardDto) {
    return 'This action adds a new userClipboard';
  }

  findAll() {
    return `This action returns all userClipboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userClipboard`;
  }

  update(id: number, updateUserClipboardDto: UpdateUserClipboardDto) {
    return `This action updates a #${id} userClipboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} userClipboard`;
  }
}
