import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from './entities/user_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private readonly usersRepository: Repository<UserRole>,
  ) {}
  createUserRole(user_role:CreateUserRoleDto) {
    return this.usersRepository
      .createQueryBuilder('users')
      .insert()
      .into("user_role")
      .values(user_role)
      .execute();
  }

  findAll() {
    return `This action returns all userRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRole`;
  }

  update(id: number, updateUserRoleDto: UpdateUserRoleDto) {
    return `This action updates a #${id} userRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRole`;
  }
}
