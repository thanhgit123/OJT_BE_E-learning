import { ProgressModule } from './modules/progress/progress.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import config from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';
import { BlogModule } from './modules/blog/blog.module';
import { CoursesModule } from './modules/courses/courses.module';
import { ChapterModule } from './modules/chapter/chapter.module';
import { CategoryModule } from './modules/category/category.module';
import { CommentModule } from './modules/comment/comment.module';
import { DocLessonModule } from './modules/doc_lesson/doc_lesson.module';
import { EnrollCourseModule } from './modules/enroll_course/enroll_course.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { RolesModule } from './modules/roles/roles.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { UserClipboardModule } from './modules/user_clipboard/user_clipboard.module';
import { UserRoleModule } from './modules/user_role/user_role.module';
import { UsersModule } from './modules/users/users.module';
import { WishListModule } from './modules/wish_list/wish_list.module';
import { CourseMyModule } from './modules/course_my/course_my.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ProgressModule,
    TypeOrmModule.forRoot(config),
    MulterModule.register({
      dest: './uploads', // Đường dẫn tới thư mục lưu trữ file tải lên
    }),

    CoursesModule,
    ChapterModule,
    AuthModule,
    LessonModule,
    TeacherModule,
    BlogModule,
    WishListModule,
    UsersModule,
    CourseMyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
