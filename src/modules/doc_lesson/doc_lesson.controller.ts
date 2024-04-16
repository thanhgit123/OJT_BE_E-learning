import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocLessonService } from './doc_lesson.service';
import { CreateDocLessonDto } from './dto/create-doc_lesson.dto';
import { UpdateDocLessonDto } from './dto/update-doc_lesson.dto';

@Controller('doc-lesson')
export class DocLessonController {
  constructor(private readonly docLessonService: DocLessonService) {}

  @Post()
  create(@Body() createDocLessonDto: CreateDocLessonDto) {
    return this.docLessonService.create(createDocLessonDto);
  }

  @Get()
  findAll() {
    return this.docLessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docLessonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocLessonDto: UpdateDocLessonDto) {
    return this.docLessonService.update(+id, updateDocLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docLessonService.remove(+id);
  }
}
