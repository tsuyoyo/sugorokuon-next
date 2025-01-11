import { Injectable } from '@nestjs/common';
import { RadikoStationDataService } from 'src/radiko/radiko-station-data.service';

@Injectable()
export class StationsService {
  constructor(private readonly radikoStationData: RadikoStationDataService) {}

  async getAllStations() {
    const regions = await this.radikoStationData.getAllRegions();
    const stations = regions.flatMap((region) => region.stations);
    return { stations };
  }

  async getStationsByArea(areaId: string) {
    const region = await this.radikoStationData.getRegion(areaId);
    return { stations: region.stations };
  }
}
