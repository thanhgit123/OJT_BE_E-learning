import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/modules/users/users.module';
import { UserRoleModule } from 'src/modules/user_role/user_role.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UsersModule), forwardRef(() => UserRoleModule), JwtModule.register({})],
  exports: [AuthService],
})
export class AuthModule {}
