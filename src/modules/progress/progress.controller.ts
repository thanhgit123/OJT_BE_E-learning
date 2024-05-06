/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/create-progress.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  create(@Body() createProgressDto: any, @Req() req: Request) {
    const user: any = req.user;
    const data = {
      userId: +user.id,
      lessionId: +createProgressDto.lesson_id,
      courseId: +createProgressDto.course_id,
      chapterId: +createProgressDto.chapter_id,
      isCompleted: 1,
      notes: 'không có',
    };
    return this.progressService.create(data);
  }

  @Get('check/:id')
  async check(@Param('id') id: number, @Req() req: Request) {
    // logic lấy được  id  user  và id session
    /*  console.log(req.headers.authorization); */
    /* const data = {
      session: +id,
      userId: 4,
    };
    const checkProgress = await this.progressService.findOne(data);
    if (checkProgress) {
      return true;
    } else {
      return false;
    } */
    /* return this.progressService.search(id); */
  }
}
