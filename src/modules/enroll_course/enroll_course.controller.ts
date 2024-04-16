import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnrollCourseService } from './enroll_course.service';
import { CreateEnrollCourseDto } from './dto/create-enroll_course.dto';
import { UpdateEnrollCourseDto } from './dto/update-enroll_course.dto';

@Controller('enroll-course')
export class EnrollCourseController {
  constructor(private readonly enrollCourseService: EnrollCourseService) {}

  @Post()
  create(@Body() createEnrollCourseDto: CreateEnrollCourseDto) {
    return this.enrollCourseService.create(createEnrollCourseDto);
  }

  @Get()
  findAll() {
    return this.enrollCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrollCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrollCourseDto: UpdateEnrollCourseDto) {
    return this.enrollCourseService.update(+id, updateEnrollCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollCourseService.remove(+id);
  }
}
