import { IsInt, IsNotEmpty } from 'class-validator';
import { UserRole } from '../entities/user_role.entity';

export class CreateUserRoleDto {
  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @IsNotEmpty()
  @IsInt()
  role_id: number;

  constructor(userRole: UserRole) {
    this.user_id = userRole.user_id;
    this.role_id = userRole.role_id;
  }
}

