import { PartialType } from '@nestjs/mapped-types';
import { CreateUserClipboardDto } from './create-user_clipboard.dto';

export class UpdateUserClipboardDto extends PartialType(CreateUserClipboardDto) {}
