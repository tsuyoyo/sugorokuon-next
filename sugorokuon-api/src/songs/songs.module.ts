import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { RadikoModule } from '../radiko/radiko.module';

@Module({
  imports: [RadikoModule],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
