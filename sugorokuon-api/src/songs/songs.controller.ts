import { Controller, Get, Param } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get('onair/:stationId')
  async getOnAirSong(@Param('stationId') stationId: string) {
    return this.songsService.getOnAirSong(stationId);
  }
}
