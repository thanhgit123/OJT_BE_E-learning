import { Module } from '@nestjs/common';
import { CourseMyService } from './course_my.service';
import { CourseMyController } from './course_my.controller';
import { CourseMy } from './entities/course_my.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CourseMyController],
  providers: [CourseMyService],
  imports:[TypeOrmModule.forFeature([CourseMy])],
})
export class CourseMyModule {}
