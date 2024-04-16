import { Module } from '@nestjs/common';
import { DocLessonService } from './doc_lesson.service';
import { DocLessonController } from './doc_lesson.controller';

@Module({
  controllers: [DocLessonController],
  providers: [DocLessonService],
})
export class DocLessonModule {}
