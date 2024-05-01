/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/create-progress.dto';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post('create')
  create(@Body() createProgressDto: CreateProgressDto) {
    console.log(createProgressDto);
    return this.progressService.create(createProgressDto);
  }
  @Get('check/:id')
  check(@Param('id') id: number) {
    console.log('day la id', id);
    /* return this.progressService.search(id); */
  }
}
