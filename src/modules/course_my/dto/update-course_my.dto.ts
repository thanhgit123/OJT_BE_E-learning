import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseMyDto } from './create-course_my.dto';

export class UpdateCourseMyDto extends PartialType(CreateCourseMyDto) {}
