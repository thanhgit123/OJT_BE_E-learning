import { Module } from '@nestjs/common';
import { UserClipboardService } from './user_clipboard.service';
import { UserClipboardController } from './user_clipboard.controller';

@Module({
  controllers: [UserClipboardController],
  providers: [UserClipboardService],
})
export class UserClipboardModule {}
