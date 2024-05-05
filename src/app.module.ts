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
import { ProgressModule } from './modules/progress/progress.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from './constant/jwt.constant';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MulterModule.register({
      dest: './uploads', // Đường dẫn tới thư mục lưu trữ file tải lên
    }),
    UsersModule,
    TeacherModule,
    LessonModule,
    CoursesModule,
    ChapterModule,
    AuthModule,
    ProgressModule,
    JwtModule.register({
      secret: JWT_CONFIG.ACCESS_KEY,
      signOptions: { expiresIn: JWT_CONFIG.ACCESS_TIME },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
