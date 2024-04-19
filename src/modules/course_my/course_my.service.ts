import { Injectable } from '@nestjs/common';
import { CreateCourseMyDto } from './dto/create-course_my.dto';
import { UpdateCourseMyDto } from './dto/update-course_my.dto';
import { CourseMy } from './entities/course_my.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseMyService {
  constructor(@InjectRepository(CourseMy) private courseMyRepo:Repository<CourseMy>){}


  //Them
  async create(createCourseMyDto: CreateCourseMyDto) {
    await this.courseMyRepo
    .createQueryBuilder()
    .insert()
    .into(CourseMy)
    .values({
      course: +createCourseMyDto.course_id as any,
      user: +createCourseMyDto.user_id as any
    })
    .execute() 
    return 'Thêm thành công';
  }


  //Lay theo user_id
  async findAllByUser(id: number) {
    return await this.courseMyRepo.createQueryBuilder("course_my")
    .innerJoinAndSelect("course_my.user", "users")
    .innerJoinAndSelect("course_my.course", "course")
    .where("course_my.user = :id", { id })
    .getMany()
  }

  //Xoa
  async remove(id: number) {
    await this.courseMyRepo.delete(id)
    return `Xoá thành công`;
  }
}
