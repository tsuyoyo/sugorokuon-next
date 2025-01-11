import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RadikoApiService } from './radiko-api.service';
import { RadikoStationDataService } from './radiko-station-data.service';
import { RadikoTimetableDataService } from './radiko-timetable-data.service';
import { RadikoResponseParserService } from './radiko-response-parser.service';

@Module({
  imports: [HttpModule],
  providers: [
    RadikoApiService,
    RadikoStationDataService,
    RadikoTimetableDataService,
    RadikoResponseParserService,
  ],
  exports: [
    RadikoStationDataService,
    RadikoTimetableDataService,
    RadikoApiService,
  ],
})
export class RadikoModule {}
