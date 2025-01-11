import { Module } from '@nestjs/common';
import { TimetablesController } from './timetables.controller';
import { RadikoModule } from '../radiko/radiko.module';

@Module({
  imports: [RadikoModule],
  controllers: [TimetablesController],
})
export class TimetablesModule {}
