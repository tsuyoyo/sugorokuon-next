import { z } from 'zod';
import { StationSchema } from './Station';

export const RegionSchema = z.object({
  regionId: z.string().optional(),
  regionName: z.string().optional(),
  stations: z.array(StationSchema),
});

export type Region = z.infer<typeof RegionSchema>;
