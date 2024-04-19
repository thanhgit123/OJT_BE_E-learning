import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseMyService } from './course_my.service';
import { CreateCourseMyDto } from './dto/create-course_my.dto';
import { UpdateCourseMyDto } from './dto/update-course_my.dto';

@Controller('/api/v1/course-my')
export class CourseMyController {
  constructor(private readonly courseMyService: CourseMyService) {}

  //Them
  @Post()
  create(@Body() createCourseMyDto: CreateCourseMyDto) {
    return this.courseMyService.create(createCourseMyDto);
  }


  //Lay theo user_id
  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.courseMyService.findAllByUser(+id);
  }


  //Xoa
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseMyService.remove(+id);
  }
}
