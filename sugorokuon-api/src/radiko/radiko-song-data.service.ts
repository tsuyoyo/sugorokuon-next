import { Injectable, Logger } from '@nestjs/common';
import { RadikoApiService } from './radiko-api.service';
import { Song } from 'src/schemas/Song';

@Injectable()
export class RadikoSongDataService {
  private readonly logger = new Logger(RadikoSongDataService.name);

  constructor(private readonly radikoApiService: RadikoApiService) {}

  async getOnAirSongs(stationId: string, songCount: number): Promise<Song[]> {
    this.logger.debug(`Fetching ${songCount} songs for station ${stationId}`);
    return this.radikoApiService.getOnAirSongs(stationId, songCount);
  }
}
