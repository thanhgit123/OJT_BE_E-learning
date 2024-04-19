import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class BlogService {
  constructor(@InjectRepository(Blog) private blogRepo:Repository<Blog>){}

  //Tao
  async create(createBlogDto: CreateBlogDto) {    
   await this.blogRepo
    .createQueryBuilder()
    .insert()
    .into(Blog)
    .values({
      create_date: createBlogDto.create_date,
      modify_date: createBlogDto.modify_date,
      voided: +createBlogDto.voided,
      content: createBlogDto.content,
      image: createBlogDto.image,
      likes:+createBlogDto.likes,
      title: createBlogDto.title,
      user: +createBlogDto.user_id as any
    })
    .execute() 
    return "Thêm blog thành công"
  }

  //Lay toan bo
  async findAll() {
    return await this.blogRepo.find();
  }

  //Lay theo user_id
  async findAllByUser(id: number): Promise<any> {
    return await this.blogRepo.createQueryBuilder("blog")
    .innerJoinAndSelect("blog.user", "users")
    .where("blog.user = :id", { id })
    .getMany()
  }
  
  //Lay theo id cua blog
  async findOne(id: number): Promise<any> {
    return await this.blogRepo.createQueryBuilder("blog")
    .innerJoinAndSelect("blog.user", "users")
    .where("blog.id = :id", { id })
    .getOne()
 
    // return await this.blogRepo.findOneBy({id})
    
  }

  //cap nhat blog
  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const {create_date,modify_date,voided,content,image,likes,title,user_id} = updateBlogDto
    await this.blogRepo.update(id,{create_date,modify_date,voided:+voided,content,image,likes:+likes,title,user:+user_id as any})
    return "Cập nhật thành công";
  }

  //xoa blog
  async remove(id: number) {
    await this.blogRepo.delete(id)
    return `Xoá blog thành công`;
  }
}
