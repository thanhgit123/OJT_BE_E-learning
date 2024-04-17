import { Module, forwardRef } from '@nestjs/common';
import { UserRoleService } from './user_role.service';
import { UserRoleController } from './user_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './entities/user_role.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Role } from '../roles/entities/role.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserRole,Role]), forwardRef(() => AuthModule)],
  controllers: [UserRoleController],
  providers: [UserRoleService],
  exports: [UserRoleService],

})
export class UserRoleModule {}
