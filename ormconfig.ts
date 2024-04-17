/* eslint-disable @typescript-eslint/no-var-requires */
import { Blog } from 'src/modules/blog/entities/blog.entity';
import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Course } from 'src/modules/courses/entities/course.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Teacher } from 'src/modules/teacher/entities/teacher.entity';
import { UserRole } from 'src/modules/user_role/entities/user_role.entity';
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
  password: process.env.DB_PASSWORD || '',
  type: 'mysql',
  database: process.env.DB_NAME || 'database-name',
  entities: [Teacher, Course,Chapter,User,Role,UserRole,WishList,Blog],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
