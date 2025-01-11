import { Controller, Get, Param } from '@nestjs/common';
import { StationsService } from './stations.service';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Get()
  async getAllStations() {
    return this.stationsService.getAllStations();
  }

  @Get('area/:areaId')
  async getStationsByArea(@Param('areaId') areaId: string) {
    return this.stationsService.getStationsByArea(areaId);
  }
}
