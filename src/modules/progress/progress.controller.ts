/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/create-progress.dto';
import { Request } from 'express';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post('create')
  create(@Body() createProgressDto: CreateProgressDto) {
    console.log(createProgressDto);
    return this.progressService.create(createProgressDto);
  }
  @Get('check/:id')
  async check(@Param('id') id: number, @Req() req: Request) {
    /*  console.log(req.headers.authorization); */
    const data = {
      session: +id,
      userId: 2,
    };
    const checkProgress = await this.progressService.findOne(data);
    if (checkProgress) {
      return true;
    } else {
      return false;
    }
    /* return this.progressService.search(id); */
  }
}
