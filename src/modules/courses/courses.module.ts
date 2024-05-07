import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from 'src/constant/jwt.constant';
import { ChapterService } from '../chapter/chapter.service';
import { LessonService } from '../lesson/lesson.service';
import { Chapter } from '../chapter/entities/chapter.entity';
import { Lesson } from '../lesson/entities/lesson.entity';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [
    TypeOrmModule.forFeature([Course]),
    JwtModule.register({
      secret: JWT_CONFIG.ACCESS_KEY,
      signOptions: { expiresIn: JWT_CONFIG.ACCESS_TIME },
    }),
  ],

  exports: [CoursesService],
})
export class CoursesModule {}
