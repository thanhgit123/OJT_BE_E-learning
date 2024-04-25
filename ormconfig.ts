/* eslint-disable @typescript-eslint/no-var-requires */
import { Blog } from 'src/modules/blog/entities/blog.entity';
import { Chapter } from 'src/modules/chapter/entities/chapter.entity';

import { CourseMy } from 'src/modules/course_my/entities/course_my.entity';

import { Comment } from 'src/modules/comment/entities/comment.entity';

import { Course } from 'src/modules/courses/entities/course.entity';
import { Lesson } from 'src/modules/lesson/entities/lesson.entity';
import { Teacher } from 'src/modules/teacher/entities/teacher.entity';

import { User } from 'src/modules/users/entities/user.entity';
import { WishList } from 'src/modules/wish_list/entities/wish_list.entity';

import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const SnakeNamingStrategy =
  require('typeorm-naming-strategies').SnakeNamingStrategy;
const config: MysqlConnectionOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  type: 'mysql',
  database: process.env.DB_NAME || 'database-name',

  entities: [Teacher, Course, Chapter,Lesson,User],
  synchronize: true,

  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
