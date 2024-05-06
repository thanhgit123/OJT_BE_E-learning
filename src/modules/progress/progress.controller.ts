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
  async create(@Body() createProgressDto: any, @Req() req: Request) {
    const user: any = req.user;
    const data = {
      user: +user.id,
      lession: +createProgressDto.lesson_id,
      course: +createProgressDto.course_id,
      chapter: +createProgressDto.chapter_id,
      isCompleted: 1,
      notes: 'không có',
    };
    const check = await this.progressService.findOne(
      +createProgressDto.lesson_id,
    );
    if (check) {
      return {
        message: 'Bạn đã hoàn thành bài học này rồi',
      };
    }
    return this.progressService.create(data);
  }
  @UseGuards(AuthGuard)
  @Get('takeAll/:id')
  async check(@Param('id') id: number, @Req() req: Request) {
    const user: any = req.user;
    const data = {
      user: +user.id,
      course: +id,
    };
    return this.progressService.takeAll(data);
  }
}
