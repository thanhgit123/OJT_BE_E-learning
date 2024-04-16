import { Injectable } from '@nestjs/common';
import { CreateEnrollCourseDto } from './dto/create-enroll_course.dto';
import { UpdateEnrollCourseDto } from './dto/update-enroll_course.dto';

@Injectable()
export class EnrollCourseService {
  create(createEnrollCourseDto: CreateEnrollCourseDto) {
    return 'This action adds a new enrollCourse';
  }

  findAll() {
    return `This action returns all enrollCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollCourse`;
  }

  update(id: number, updateEnrollCourseDto: UpdateEnrollCourseDto) {
    return `This action updates a #${id} enrollCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollCourse`;
  }
}
