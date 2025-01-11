import { z } from 'zod';
import { ProgramSchema } from './Program';

const dateTransformer = z.preprocess((value) => {
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === 'string') {
    if (/^\d{8}$/.test(value)) {
      const year = parseInt(value.substring(0, 4), 10);
      const month = parseInt(value.substring(4, 6), 10) - 1;
      const day = parseInt(value.substring(6, 8), 10);

      return new Date(year, month, day);
    }
    throw new Error('Invalid date format');
  }
  return null;
}, z.date());

export const StationTimetableSchema = z.object({
  stationId: z.string(),
  stationName: z.string().nullable(),
  date: dateTransformer,
  programs: z.array(ProgramSchema),
});

export type StationTimetable = z.infer<typeof StationTimetableSchema>;
