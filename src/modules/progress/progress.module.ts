import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { Module } from '@nestjs/common';
import { Progress } from './entities/progress.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from 'src/constant/jwt.constant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Progress]),
    JwtModule.register({
      secret: JWT_CONFIG.ACCESS_KEY,
      signOptions: { expiresIn: JWT_CONFIG.ACCESS_TIME },
    }),
  ],
  controllers: [ProgressController],
  providers: [ProgressService],
})
export class ProgressModule {}
