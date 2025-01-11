import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { Region } from 'src/schemas/Region';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get()
  async findAll(): Promise<Array<Region>> {
    return this.regionsService.findAll();
  }
}
