import { z } from 'zod';
import { StationLogoSchema } from './StationLogo';

export const StationSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  logos: z.array(StationLogoSchema),
  banner: z.string(),
  url: z.string(),
});

export type Station = z.infer<typeof StationSchema>;
