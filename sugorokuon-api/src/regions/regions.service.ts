import { Injectable } from '@nestjs/common';
import { RadikoStationDataService } from '../radiko/radiko-station-data.service';
import { Region } from 'src/schemas/Region';

@Injectable()
export class RegionsService {
  constructor(
    private readonly radikoStationDataService: RadikoStationDataService,
  ) {}

  async findAll(): Promise<Array<Region>> {
    return this.radikoStationDataService.getAllRegions();
  }
}
