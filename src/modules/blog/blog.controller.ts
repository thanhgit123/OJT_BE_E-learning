import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('/api/v1/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  //Tao
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  //Lay toan bo
  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  //Lay theo user_id
  @Get('all/:id')
  findAllByUser(@Param('id') id: string) {
    return this.blogService.findAllByUser(+id);
  }

  //Lay theo id cua blog
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  //cap nhat blog
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  //xoa blog
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
