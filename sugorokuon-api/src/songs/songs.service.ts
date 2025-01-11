import { Injectable } from '@nestjs/common';
import { RadikoApiService } from '../radiko/radiko-api.service';

@Injectable()
export class SongsService {
  constructor(private readonly radikoApiService: RadikoApiService) {}

  async getOnAirSong(stationId: string) {
    return this.radikoApiService.getOnAirSongs(stationId);
  }
}
