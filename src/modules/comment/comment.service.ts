import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private readonly commentRepository: Repository<Comment>) {}
 async create(createCommentDto: CreateCommentDto) {
    createCommentDto.create_date = new Date(Date.now());
    createCommentDto.modify_date = new Date(Date.now());
    return await this.commentRepository
      .createQueryBuilder()
      .insert()
      .into(Comment)
      .values(createCommentDto)
      .execute()
  }

    async findAll() {
    return await this.commentRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: number) {
    return await this.commentRepository 
      .createQueryBuilder()
      .delete()
      .from(Comment)
      .where('id = :id', { id })
      .execute()
  }
}
