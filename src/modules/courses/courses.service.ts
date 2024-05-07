import { of } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { skip } from 'node:test';

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
        teacher: teacher_id as any,
      })
      .execute();
  }

  async findAll() {
    const result = await this.courseRepository.find({
      relations: ['teacher', 'chapters'],
      where: { status: true },
    });
    return result;
  }
  async findAllAdmin() {
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
      .select(['course', 'teacher', 'chapters', 'lessons'])
      .orderBy('chapters.id', 'ASC')
      .addOrderBy('lessons.id', 'ASC')
      .where('course.id = :id', { id })
      .getOne();
  }

  async findOneCourseAdmin(id: number) {
    return await this.courseRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.chapters', 'chapters')
      .leftJoinAndSelect('chapters.lessons', 'lessons')
      .select(['chapters', 'course.title', 'lessons'])
      .orderBy('chapters.id', 'ASC')
      .addOrderBy('lessons.id', 'ASC')
      .where('course.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateCourseDto: any) {
    updateCourseDto.teacher = updateCourseDto.teacher_id;
    delete updateCourseDto.teacher_id;
    return await this.courseRepository.update(id, updateCourseDto);
  }

  async searchCourse(searchValue: string) {
    const result = await this.courseRepository.find({
      where: {
        title: Like(`%${searchValue}%`),
        status: true,
      },
      relations: ['teacher'],
    });
    const total = result.length;
    const totalPage = Math.ceil(total / 6);
    return {
      data: result,
      itemByPage: +6,
      total: totalPage,
      totalItem: total,
    };
  }

  async paginationCourse(page: number, limit: number) {
    const result = await this.courseRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.teacher', 'teacher')
      .where('course.status = :status', { status: true })
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();

    const total = await this.courseRepository.count({
      where: { status: true },
    });
    const totalPage = Math.ceil(total / limit);
    return {
      data: result,
      itemByPage: +limit,
      total: totalPage,
      totalItem: total,
    };
  }

  async updateById(id: number) {
    const data = await this.courseRepository.findOne({ where: { id } });
    data.status = !data.status;
    return await this.courseRepository.update(id, data);
  }
}
