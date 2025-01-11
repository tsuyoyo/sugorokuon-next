import { Module } from '@nestjs/common';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';
import { RadikoModule } from 'src/radiko/radiko.module';

@Module({
  imports: [RadikoModule],
  controllers: [StationsController],
  providers: [StationsService],
})
export class StationsModule {}
