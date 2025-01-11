import { Test, TestingModule } from '@nestjs/testing';
import { RadikoApiService } from './radiko-api.service';

describe('RadikoApiService', () => {
  let service: RadikoApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadikoApiService],
    }).compile();

    service = module.get<RadikoApiService>(RadikoApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
