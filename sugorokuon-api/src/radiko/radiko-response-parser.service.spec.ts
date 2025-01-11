import { Test, TestingModule } from '@nestjs/testing';
import { RadikoResponseParserService } from './radiko-response-parser.service';
import axios from 'axios';

describe('RadikoResponseParserService', () => {
  let service: RadikoResponseParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadikoResponseParserService],
    }).compile();

    service = module.get<RadikoResponseParserService>(
      RadikoResponseParserService,
    );
  });

  describe('parseProgramResponse', () => {
    const getDateToday = () => {
      const date = new Date();
      return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
    };

    [
      'LFR',
      'INT',
      'FMT',
      'QRR',
      'TBS',
      'RN1',
      'RN2',
      'INT',
      'FMJ',
      'JORF',
      'BAYFM78',
      'NACK5',
      'YFM',
      'IBS',
      'JOAK',
      'JOAK-FM',
    ].forEach((station) => {
      it(`should parse the program (${station}) response`, async () => {
        const response = await axios.get(
          `https://radiko.jp/v3/program/station/date/${getDateToday()}/${station}.xml`,
        );
        const xmlString = response.data;
        const result = await service.parseProgramResponse(xmlString);
        expect(result[0].programs.length).toBeGreaterThan(3);
      });
    });

    ['JP1', 'JP13'].forEach((area) => {
      it(`should parse the program (${area}) response`, async () => {
        const response = await axios.get(
          `https://radiko.jp/v3/program/today/${area}.xml`,
        );
        const xmlString = response.data;
        const result = await service.parseProgramResponse(xmlString);
        expect(result.length).toBeGreaterThan(3);
        expect(result[0].programs.length).toBeGreaterThan(3);
      });
    });
  });

  describe('parseStationResponse', () => {
    Array.from({ length: 47 }, (_, i) => i + 1).forEach((areaId) => {
      it('should parse the XML string and return a Station object', async () => {
        const response = await axios.get(
          `https://radiko.jp/v3/station/list/JP${areaId}.xml`,
        );
        const xmlString = response.data;
        const result = await service.parseStationResponse(xmlString);

        expect(result.stations.length).toBeGreaterThan(0);
      });
    });
  });

  describe('parseRegionResponse', () => {
    it('should parse the XML string and return a Station object', async () => {
      const response = await axios.get(
        'https://radiko.jp/v3/station/region/full.xml',
      );
      const xmlString = response.data;
      const result = await service.parseRegionResponse(xmlString);

      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('parseSongsResponse', () => {
    it('should parse the empty data correctly', () => {
      const songs = service.parseSongsResponse('{[]}');
      expect(songs.length).toEqual(0);
    });

    it('should parse the data from the API correctly', async () => {
      const response = await axios.get(
        'https://api.radiko.jp/music/api/v1/noas/BAYFM78/latest?size=20',
      );
      const jsonData = response.data;
      const songs = service.parseSongsResponse(jsonData);
      expect(songs.length).toEqual(20);
    });
  });
});
