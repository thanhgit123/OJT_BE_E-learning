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
    createCourseDto.create_date = new Date(Date.now());
    createCourseDto.modify_date = new Date(Date.now());
    const { teacher_id } = createCourseDto;
    return await this.courseRepository
      .createQueryBuilder()
      .insert()
      .into(Course)
      .values({
        ...createCourseDto,
        teacher_id: teacher_id as any,
      })
      .execute();
  }

  async findAll() {
    const result = await this.courseRepository.find({
      relations: ['teacher_id', 'chapters'],
    });
    return result;
  }

  async findOne(id: number) {
    return await this.courseRepository
      .createQueryBuilder('course')
      .innerJoinAndSelect('course.teacher_id', 'teacher')
      .leftJoinAndSelect('course.chapters', 'chapters')
      .leftJoinAndSelect('chapters.lessons', 'lessons')
      .where('course.id = :id', { id }) 
      .getOne();
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    console.log(updateCourseDto)
    const {teacher_id} = updateCourseDto
    return await this.courseRepository
      .createQueryBuilder()
      .update(Course)
      .set({ ...updateCourseDto, teacher_id: teacher_id as any })
      .where('id = :id', { id })  
      .execute();
  }

  
}
