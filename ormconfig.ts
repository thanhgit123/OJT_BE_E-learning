/* eslint-disable @typescript-eslint/no-var-requires */
import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Comment } from 'src/modules/comment/entities/comment.entity';
import { Course } from 'src/modules/courses/entities/course.entity';
import { Lesson } from 'src/modules/lesson/entities/lesson.entity';
import { Teacher } from 'src/modules/teacher/entities/teacher.entity';
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
  entities: [Teacher, Course, Chapter,Lesson,Comment],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
