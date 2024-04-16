import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>) {}
  async create(createTeacherDto: CreateTeacherDto) {
    return await this.teacherRepository
    .createQueryBuilder()
    .insert()
    .into(Teacher)
    .values(createTeacherDto)
    .execute();
  }

  async findAll() {
    const result =  await this.teacherRepository.find({
      relations: ['course'],
      // where: { course: { id: 1 } }
    })
    return result
    
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return await this.teacherRepository
    .createQueryBuilder()
    .update(Teacher)
    .set(updateTeacherDto)
    .where('id = :id', { id })
    .execute(); 
  }

  async remove(id: number) {
    return  await this.teacherRepository
    .createQueryBuilder()
    .delete()
    .from(Teacher)
    .where('id = :id', { id })
    .execute();
  }
}
