import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Progress } from './entities/progress.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private progress: Repository<Progress>,
  ) {}
  async findByColumn(columnName: string, value: number): Promise<Progress[]> {
    return await this.progress.find({
      where: {
        [columnName]: value,
      },
    });
  }
  async create(newRecordData: any) {
    const newRecord = this.progress.create(newRecordData);
    return await this.progress.save(newRecord);
  }

  async update(id: number, updateData: any): Promise<any> {
    const result = await this.progress.update(id, updateData);
    return result;
  }
  async findOne(data: any) {
    const result = await this.progress.findOne({
      where: {
        lession: data,
      },
    });
    return result;
  }
  async takeAll(data: any) {
    const id = data.course;
    const result = await this.progress.find({
      where: {
        course: Like(`%${id}%`),
        user: Like(`%${data.user}%`),
      },
    });
    return result;
  }
}
