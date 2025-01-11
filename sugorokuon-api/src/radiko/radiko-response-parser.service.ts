import { Injectable, Logger } from '@nestjs/common';
import * as xml2js from 'xml2js';
import * as crypto from 'crypto';

import { Program, ProgramSchema } from '../schemas/Program';
import {
  StationTimetable,
  StationTimetableSchema,
} from '../schemas/StationTimetable';
import { Song, SongSchema } from '../schemas/Song';
import { Region, RegionSchema } from '../schemas/Region';
import { Station, StationSchema } from '../schemas/Station';
import { StationLogo, StationLogoSchema } from '../schemas/StationLogo';

@Injectable()
export class RadikoResponseParserService {
  private readonly logger = new Logger(RadikoResponseParserService.name);

  constructor() {}

  async parseProgramResponse(
    xmlString: string,
  ): Promise<Array<StationTimetable>> {
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlString);
    return (
      result.radiko.stations?.[0].station.map(this.parseStation.bind(this)) ||
      Array<StationTimetable>()
    );
  }

  parseSongsResponse = (response: any): Array<Song> => {
    const songsData = response.data;
    if (songsData === undefined || !Array.isArray(songsData)) {
      return new Array<Song>();
    }
    return songsData.map(this.parseSong.bind(this));
  };

  parseStationResponse = async (xmlString: string): Promise<Region> => {
    const parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
    });
    try {
      const result = await parser.parseStringPromise(xmlString);
      return this.parseStations(result.stations);
    } catch (err) {
      throw new Error(
        `Error parsing XML: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  };

  parseRegionResponse = async (xmlString: string): Promise<Array<Region>> => {
    const parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
    });
    try {
      const result = await parser.parseStringPromise(xmlString);
      const stationsData = result.region.stations;
      return Array.isArray(stationsData)
        ? stationsData.map(this.parseStations.bind(this))
        : [this.parseStations(stationsData)];
    } catch (err) {
      throw new Error(
        `Error parsing XML: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  };

  private parseSong = (songData: any): Song => {
    const artistName =
      songData.artist !== undefined
        ? songData.artist.name
        : songData.artist_name;

    const artistId = crypto
      .createHash('md5')
      .update(
        songData.artist !== undefined && songData.artist.name !== undefined
          ? songData.artist.name
          : 'no-artist',
      )
      .digest('hex');

    return SongSchema.parse({
      title: songData.title,
      onAirTime: songData.displayed_start_time,
      artist: {
        id: artistId,
        name: artistName,
        nameEn:
          songData.artist !== undefined ? songData.artist.name_en : undefined,
        nameKana:
          songData.artist !== undefined ? songData.artist.name_kana : undefined,
      },
      thumbnails:
        songData.music !== undefined && songData.music.image !== undefined
          ? {
              small: songData.music.image.small,
              medium: songData.music.image.medium,
              large: songData.music.image.large,
            }
          : undefined,
    });
  };

  private parseProgram(prog: any): Program {
    let info: string | null = null;
    try {
      info = prog.info ? new xml2js.Builder().buildObject(prog.info[0]) : null;
    } catch (e) {
      this.logger.warn(
        `Failed to parse program info: ${e instanceof Error ? e.message : String(e)}`,
      );
      info = null;
    }
    return ProgramSchema.parse({
      id: prog.$?.id || null,
      title: prog.title?.[0] || null,
      url: prog.url?.[0] || null,
      start_time: prog.$?.ft || null,
      end_time: prog.$?.to || null,
      personalities: prog.pfm?.[0] || null,
      image: prog.img?.[0] || null,
      desc: prog.desc?.[0] || null,
      info,
    });
  }

  private parseStation(station: any): StationTimetable {
    return StationTimetableSchema.parse({
      stationId: station.$.id,
      stationName: station.name?.[0] || null,
      date: station.progs?.[0]?.date?.[0],
      programs:
        station.progs?.[0]?.prog.map(this.parseProgram.bind(this)) || [],
    });
  }

  private parseStations = (stations: any): Region => {
    const parseLogo = (logo: any): StationLogo => {
      return StationLogoSchema.parse({
        width: parseInt(logo.width, 10),
        height: parseInt(logo.height, 10),
        url: logo._,
      });
    };
    const parseItem = (station: any): Station =>
      StationSchema.parse({
        id: station.id,
        name: station.name || null,
        logos: Array.isArray(station.logo) ? station.logo.map(parseLogo) : [],
        banner: station.banner,
        url: station.href,
      });
    return RegionSchema.parse({
      regionId: stations.region_id,
      regionName: stations.region_name,
      stations: Array.isArray(stations.station)
        ? stations.station.map(parseItem)
        : [parseItem(stations.station)],
    });
  };
}
