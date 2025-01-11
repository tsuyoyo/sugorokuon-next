import { Injectable, Logger } from '@nestjs/common';
import { RadikoApiService } from 'src/radiko/radiko-api.service';
import { StationTimetable } from 'src/schemas/StationTimetable';

@Injectable()
export class RadikoTimetableDataService {
  constructor(private radikoApi: RadikoApiService) {}

  private readonly logger = new Logger(RadikoTimetableDataService.name);

  private CACHE_EXPIRATION = 3 * 60 * 60 * 1000;

  private CACHE_MAX_SIZE = 300;

  private cache = new Map<
    string,
    { data: Array<StationTimetable>; lastRequest: Date }
  >();

  private freeOldestEntry() {
    let oldestKey: string;
    let oldestRequest: Date;

    for (const [key, value] of this.cache.entries()) {
      if (!oldestRequest || value.lastRequest < oldestRequest) {
        oldestKey = key;
        oldestRequest = value.lastRequest;
      }
    }
    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  async getTimetableByArea(
    areaId: string,
    year: number,
    month: number,
    date: number,
  ): Promise<Array<StationTimetable>> {
    const cacheKey = `${areaId}-${year}-${month}-${date}`;

    const cachedData = this.cache.get(cacheKey);
    if (
      cachedData &&
      Date.now() - cachedData.lastRequest.getTime() < this.CACHE_EXPIRATION
    ) {
      this.logger.debug(`Cache hit for ${cacheKey}`);
      return this.cache.get(cacheKey).data;
    }
    this.logger.debug(`Cache didn't hit for ${cacheKey} - fetching data`);

    // If the cache is full, free the oldest entry.
    if (this.cache.size > this.CACHE_MAX_SIZE) {
      this.freeOldestEntry();
    }
    // Make sure the old cache is deleted before fetching new data
    this.cache.delete(cacheKey);

    try {
      const region = await this.radikoApi.getRegion(areaId);
      const timetables = await Promise.all(
        region.stations.map((station) =>
          this.radikoApi.getTimetable(station.id, year, month, date),
        ),
      );

      this.cache.set(cacheKey, { data: timetables, lastRequest: new Date() });
      return timetables;
    } catch (e) {
      this.logger.error(`Failed to fetch data for ${cacheKey}: ${e}`);
      throw e;
    }
  }

  async getTimetableByStation(
    stationId: string,
    year: number,
    month: number,
    date: number,
  ): Promise<Array<StationTimetable>> {
    const cacheKey = `station-${stationId}-${year}-${month}-${date}`;

    const cachedData = this.cache.get(cacheKey);
    if (
      cachedData &&
      Date.now() - cachedData.lastRequest.getTime() < this.CACHE_EXPIRATION
    ) {
      this.logger.debug(`Cache hit for ${cacheKey}`);
      return this.cache.get(cacheKey).data;
    }
    this.logger.debug(`Cache didn't hit for ${cacheKey} - fetching data`);

    // If the cache is full, free the oldest entry.
    if (this.cache.size > this.CACHE_MAX_SIZE) {
      this.freeOldestEntry();
    }
    // Make sure the old cache is deleted before fetching new data
    this.cache.delete(cacheKey);

    try {
      const timetable = await this.radikoApi.getTimetable(
        stationId,
        year,
        month,
        date,
      );
      this.cache.set(cacheKey, { data: [timetable], lastRequest: new Date() });
      return [timetable];
    } catch (e) {
      this.logger.error(`Failed to fetch data for ${cacheKey}: ${e}`);
      throw e;
    }
  }
}
