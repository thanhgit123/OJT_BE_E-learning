import { PartialType } from '@nestjs/mapped-types';
import { CreateDocLessonDto } from './create-doc_lesson.dto';

export class UpdateDocLessonDto extends PartialType(CreateDocLessonDto) {}
