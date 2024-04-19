import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post('create')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get('list')
  findAll() {
    return this.coursesService.findAll();
  }

  @Get('searchCourse')
  searchCourse(@Query('key') searchValue: any) {
    return this.coursesService.searchCourse(searchValue);
  }

  @Get('findCourseById/:id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Get('findCourseByIdAdmin/:id')
  findOneCourseAdmin(@Param('id') id: string) {
    return this.coursesService.findOneCourseAdmin(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }
}
