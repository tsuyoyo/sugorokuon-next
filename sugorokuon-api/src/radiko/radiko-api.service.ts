import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { RadikoResponseParserService } from './radiko-response-parser.service';
import { StationTimetable } from 'src/schemas/StationTimetable';
import { Region } from 'src/schemas/Region';
import { Song } from 'src/schemas/Song';

@Injectable()
export class RadikoApiService {
  private readonly logger = new Logger(RadikoApiService.name);
  private URL_BASE = 'https://radiko.jp';
  private URL_API_BASE = 'https://api.radiko.jp';

  constructor(
    private readonly httpService: HttpService,
    private readonly parser: RadikoResponseParserService,
  ) {}

  async getAllRegions(): Promise<Array<Region>> {
    const url = `${this.URL_BASE}/v3/station/region/full.xml`;
    this.logger.debug(`Fetching regions from: ${url}`);
    const response = await this.httpService.axiosRef.get(url);
    return this.parser.parseRegionResponse(response.data);
  }

  async getRegion(areaId: string): Promise<Region> {
    const url = `${this.URL_BASE}/v3/station/list/${areaId}.xml`;
    this.logger.debug(`Fetching region from: ${url}`);
    const response = await this.httpService.axiosRef.get(url);
    return this.parser.parseStationResponse(response.data);
  }

  async getTimetable(
    stationId: string,
    year: number,
    month: number,
    day: number,
  ): Promise<StationTimetable> {
    const date = `${year}${month.toString().padStart(2, '0')}${day
      .toString()
      .padStart(2, '0')}`;
    const url = `${this.URL_BASE}/v3/program/station/date/${date}/${stationId}.xml`;

    this.logger.debug(`Fetching timetable from: ${url}`);
    const response = await this.httpService.axiosRef.get(url);
    const timetables = await this.parser.parseProgramResponse(response.data);
    return timetables[0];
  }

  async getOnAirSongs(
    stationId: string,
    size: number = 10,
  ): Promise<Array<Song>> {
    const url = `${this.URL_API_BASE}/music/api/v1/noas/${stationId}/latest?size=${size}`;
    this.logger.debug(`Fetching songs from: ${url}`);

    const response = await this.httpService.axiosRef.get(url);
    return this.parser.parseSongsResponse(response.data);
  }
}
