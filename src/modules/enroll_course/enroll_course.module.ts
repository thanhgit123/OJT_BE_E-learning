import { Module } from '@nestjs/common';
import { EnrollCourseService } from './enroll_course.service';
import { EnrollCourseController } from './enroll_course.controller';
import { EnrollCourse } from './entities/enroll_course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EnrollCourseController],
  providers: [EnrollCourseService],
  imports:[TypeOrmModule.forFeature([EnrollCourse])]
})
export class EnrollCourseModule {}
