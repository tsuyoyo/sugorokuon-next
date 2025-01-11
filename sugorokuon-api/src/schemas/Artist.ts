import { z } from 'zod';

export const ArtistSchema = z.object({
  id: z.string(),
  name: z.string(),
  nameEn: z.string().optional(),
  nameKana: z.string().optional(),
});

export type Artist = z.infer<typeof ArtistSchema>;
