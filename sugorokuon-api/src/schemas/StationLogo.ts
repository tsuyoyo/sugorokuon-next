import { z } from 'zod';

export const StationLogoSchema = z.object({
  width: z.number().default(0),
  height: z.number().default(0),
  url: z.string(),
});

export type StationLogo = z.infer<typeof StationLogoSchema>;
