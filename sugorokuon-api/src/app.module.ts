import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TimetablesModule } from './timetables/timetables.module';
import { HttpModule } from '@nestjs/axios';

import { RegionsModule } from './regions/regions.module';
import { RadikoModule } from './radiko/radiko.module';
import { StationsModule } from './stations/stations.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    TimetablesModule,
    HttpModule,
    RegionsModule,
    RadikoModule,
    StationsModule,
    SongsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
