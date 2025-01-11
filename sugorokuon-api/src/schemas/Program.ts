import { z } from 'zod';

// Date is in the format "YYYYMMDDHHmmss".
// E.g. -> "start_time": "20240521053000"
const dateTransformer = z.preprocess((value) => {
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === 'string') {
    if (/^\d{14}$/.test(value)) {
      const year = parseInt(value.substring(0, 4), 10);
      const month = parseInt(value.substring(4, 6), 10) - 1;
      const day = parseInt(value.substring(6, 8), 10);
      const hour = parseInt(value.substring(8, 10), 10);
      const minute = parseInt(value.substring(10, 12), 10);
      const second = parseInt(value.substring(12, 14), 10);

      return new Date(Date.UTC(year, month, day, hour - 9, minute, second));
    }
    throw new Error('Invalid date format');
  }
  return null;
}, z.date());

export const ProgramSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().nullable(),
  start_time: dateTransformer,
  end_time: dateTransformer,
  personalities: z.string().nullable(),
  image: z.string().nullable(),
  desc: z.string().nullable(),
  info: z.string().nullable(),
});

export type Program = z.infer<typeof ProgramSchema>;
