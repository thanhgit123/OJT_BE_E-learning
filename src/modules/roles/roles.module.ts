import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { UserRole } from '../user_role/entities/user_role.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Role,User])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
