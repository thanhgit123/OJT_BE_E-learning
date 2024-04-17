import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>) {}
  async create(createLessonDto: CreateLessonDto) {
    console.log(createLessonDto)
    return await this.lessonRepository
      .createQueryBuilder()
      .insert()
      .into(Lesson)
      .values(createLessonDto)
      .execute();
  }

  async findAll() {
    return await this.lessonRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return `This action updates a #${id} lesson`;
  }

  
}
