import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { Module } from '@nestjs/common';
import { Progress } from './entities/progress.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Progress])],
  controllers: [ProgressController],
  providers: [ProgressService],
})
export class ProgressModule {}
