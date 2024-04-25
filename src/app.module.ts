import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import config from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';
import { CoursesModule } from './modules/courses/courses.module';
import { ChapterModule } from './modules/chapter/chapter.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MulterModule.register({
      dest: './uploads', // Đường dẫn tới thư mục lưu trữ file tải lên
    }),
    UsersModule, TeacherModule, LessonModule, CoursesModule,ChapterModule, AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
