import { z } from 'zod';
import { ArtistSchema } from './Artist';

const ImageSchema = z.object({
  large: z.string(),
  medium: z.string(),
  small: z.string(),
});

export const SongSchema = z.object({
  title: z.string(),
  onAirTime: z.string(),
  artist: z.object(ArtistSchema.shape).optional(),
  thumbnails: z.object(ImageSchema.shape).optional(),
});

export type Song = z.infer<typeof SongSchema>;
