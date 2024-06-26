import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports:[TypeOrmModule.forFeature([Comment])],
  exports:[CommentService]
})
export class CommentModule {}
