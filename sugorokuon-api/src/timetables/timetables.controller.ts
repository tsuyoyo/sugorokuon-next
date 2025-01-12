import { Controller, Get, Param } from '@nestjs/common';
import { RadikoTimetableDataService } from 'src/radiko/radiko-timetable-data.service';
import { RadikoStationDataService } from 'src/radiko/radiko-station-data.service';

@Controller('timetables')
export class TimetablesController {
  constructor(
    private readonly dataService: RadikoTimetableDataService,
    private readonly stationService: RadikoStationDataService,
  ) {}

  /**
   * Get all timetables
   *
   */
  @Get()
  async getAllTimetables() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const areas = await this.stationService.getAllRegions();
    const regionsWithTimetables = await Promise.all(
      areas.map(async (area) => {
        const stationTimetables = await Promise.all(
          area.stations.map((station) =>
            this.dataService.getTimetableByStation(
              station.id,
              year,
              month,
              day,
            ),
          ),
        );
        return {
          id: area.regionId,
          name: area.regionName,
          stations: stationTimetables.flat(),
        };
      }),
    );

    return {
      regions: regionsWithTimetables,
    };
  }

  /**
   * Get today's timetables by area
   *
   * @param {string} areaId - Area ID to fetch timetables for
   * @returns {Promise<TimetableProgram[]>} Array of timetable programs for the specified area
   */
  @Get('area/:areaId')
  getTimetablesByArea(@Param('areaId') areaId: string) {
    const date = new Date();
    return this.dataService.getTimetableByArea(
      areaId,
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    );
  }

  /**
   * Get timetables by area and date
   *
   * @param {string} areaId - Area ID to fetch timetables for
   * @param {string} date - Date in 'yyyymmdd' format
   * @returns {Promise<TimetableProgram[]>} Array of timetable programs for the specified area and date
   */
  @Get('area/:areaId/date/:date')
  getTimetablesByAreaAndDate(
    @Param('areaId') areaId: string,
    @Param('date') date: string,
  ) {
    return this.dataService.getTimetableByArea(
      areaId,
      parseInt(date.slice(0, 4), 10),
      parseInt(date.slice(4, 6), 10),
      parseInt(date.slice(6, 8), 10),
    );
  }

  /**
   * Get today's timetables by station
   *
   * @param {string} stationId - Station ID to fetch timetables for
   * @returns {Promise<TimetableProgram[]>} Array of timetable programs for the specified station
   */
  @Get('station/:stationId')
  getTimetablesByStation(@Param('stationId') stationId: string) {
    const date = new Date();
    return this.dataService.getTimetableByStation(
      stationId,
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    );
  }

  /**
   * Get timetables by station and date
   *
   * @param {string} stationId - Station ID to fetch timetables for
   * @param {string} date - Date in 'yyyymmdd' format
   * @returns {Promise<TimetableProgram[]>} Array of timetable programs for the specified station and date
   */
  @Get('station/:stationId/date/:date')
  getTimetablesByStationAndDate(
    @Param('stationId') stationId: string,
    @Param('date') date: string,
  ) {
    return this.dataService.getTimetableByStation(
      stationId,
      parseInt(date.slice(0, 4), 10),
      parseInt(date.slice(4, 6), 10),
      parseInt(date.slice(6, 8), 10),
    );
  }

  @Get('date/:date')
  async getAllTimetablesByDate(@Param('date') date: string) {
    const year = parseInt(date.slice(0, 4), 10);
    const month = parseInt(date.slice(4, 6), 10);
    const day = parseInt(date.slice(6, 8), 10);

    const areas = await this.stationService.getAllRegions();
    const regionsWithTimetables = await Promise.all(
      areas.map(async (area) => {
        const stationTimetables = await Promise.all(
          area.stations.map((station) =>
            this.dataService.getTimetableByStation(
              station.id,
              year,
              month,
              day,
            ),
          ),
        );
        return {
          id: area.regionId,
          name: area.regionName,
          stations: stationTimetables.flat(),
        };
      }),
    );

    return {
      regions: regionsWithTimetables,
    };
  }
}
