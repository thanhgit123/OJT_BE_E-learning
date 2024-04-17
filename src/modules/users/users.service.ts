import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  getUserByEmail(phone:string) {
    return this.usersRepository.findOne({
      where: {
        phone,
      },
    });
  }
  
  createUser(user) {
    return this.usersRepository
      .createQueryBuilder('users')
      .insert()
      .into(User)
      .values(user)
      .execute();
  }
  async findAll() {
    const users = await this.usersRepository
      .createQueryBuilder('users')
      .getMany();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
