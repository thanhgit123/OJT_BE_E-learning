import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Course } from 'src/modules/courses/entities/course.entity';
import { Lesson } from 'src/modules/lesson/entities/lesson.entity';
import { Progress } from 'src/modules/progress/entities/progress.entity';
import { Teacher } from 'src/modules/teacher/entities/teacher.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

require('dotenv').config();

const SnakeNamingStrategy =
  require('typeorm-naming-strategies').SnakeNamingStrategy;
const config: MysqlConnectionOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '250123',
  type: 'mysql',
  database: process.env.DB_NAME || 'e-learning',
  entities: [User, Teacher, Lesson, Course, Chapter, Progress],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
