import { Injectable, Logger } from '@nestjs/common';
import { RadikoApiService } from 'src/radiko/radiko-api.service';
import { Region } from 'src/schemas/Region';

@Injectable()
export class RadikoStationDataService {
  constructor(private radikoApi: RadikoApiService) {}

  private readonly logger = new Logger(RadikoStationDataService.name);

  private CACHE_EXPIRATION = 3 * 60 * 60 * 1000;

  // Note: key is 'all' or areaId.
  private cache = new Map<string, { data: Array<Region>; lastRequest: Date }>();

  private isCacheValid(cachedData: { lastRequest: Date }): boolean {
    const currentTime = Date.now();
    const expirationTime = cachedData.lastRequest.getTime();
    return currentTime - expirationTime < this.CACHE_EXPIRATION;
  }

  private async getFromCacheOrFetch<T>(
    key: string,
    fetchFn: () => Promise<T | Array<T>>,
    isSingle = false,
  ): Promise<T | Array<T>> {
    const cachedData = this.cache.get(key);
    if (cachedData && this.isCacheValid(cachedData)) {
      this.logger.debug(`Cache hit for ${key}`);
      return isSingle ? (cachedData.data[0] as T) : (cachedData.data as T[]);
    }
    this.logger.debug(`Cache didn't hit for ${key} - fetching data`);

    this.cache.delete(key);
    const data = await fetchFn();
    this.cache.set(key, {
      data: Array.isArray(data) ? data : [data],
      lastRequest: new Date(),
    });
    return data;
  }

  async getAllRegions(): Promise<Array<Region>> {
    return this.getFromCacheOrFetch('all', () =>
      this.radikoApi.getAllRegions(),
    ) as Promise<Array<Region>>;
  }

  async getRegion(areaId: string): Promise<Region> {
    return this.getFromCacheOrFetch(
      areaId,
      () => this.radikoApi.getRegion(areaId),
      true,
    ) as Promise<Region>;
  }
}
