import { Injectable } from '@nestjs/common';
import { CreateDocLessonDto } from './dto/create-doc_lesson.dto';
import { UpdateDocLessonDto } from './dto/update-doc_lesson.dto';

@Injectable()
export class DocLessonService {
  create(createDocLessonDto: CreateDocLessonDto) {
    return 'This action adds a new docLesson';
  }

  findAll() {
    return `This action returns all docLesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} docLesson`;
  }

  update(id: number, updateDocLessonDto: UpdateDocLessonDto) {
    return `This action updates a #${id} docLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} docLesson`;
  }
}
