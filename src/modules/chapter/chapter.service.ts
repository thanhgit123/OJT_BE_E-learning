import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Repository } from 'typeorm';
import { Chapter } from './entities/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly courseRepository: Repository<Chapter>,  
  ) {}
  async create(createChapterDto: CreateChapterDto) {
    return await this.courseRepository
      .createQueryBuilder()
      .insert()
      .into(Chapter)
      .values(createChapterDto)
      .execute();
  }

  async findAll() {
    const result = await this.courseRepository.find({ 
      relations: ['lessons']
    });
    return result;
  }

  async findOne(id: number) {
    
  }

  update(id: number, updateChapterDto: UpdateChapterDto) {
    return `This action updates a #${id} chapter`;
  }
}
