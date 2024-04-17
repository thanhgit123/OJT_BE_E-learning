import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    console.log(createCourseDto);
    return await this.courseRepository
      .createQueryBuilder()
      .insert()
      .into(Course)
      .values(createCourseDto)
      .execute();
  }

  async findAll() {
    const result = await this.courseRepository.find({
      relations: ['teacher', 'chapters'],
    });
    return result;
  }

  async findOne(id: number) {
    return await this.courseRepository
      .createQueryBuilder('course')
      .innerJoinAndSelect('course.teacher', 'teacher')
      .leftJoinAndSelect('course.chapters', 'chapters')
      .leftJoinAndSelect('chapters.lessons', 'lessons')
      .where('course.id = :id', { id }) 
      .getOne();
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  
}
