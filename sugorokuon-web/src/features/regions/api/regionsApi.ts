import { apiClient } from '../../../shared/api/client';
import { Region } from '../types';

export const regionsApi = {
  getRegions: async (): Promise<Region[]> => {
    const response = await apiClient.get<Region[]>('/regions');
    return response.data;
  },

  getRegion: async (regionId: string): Promise<Region> => {
    const response = await apiClient.get<Region>(`/regions/${regionId}`);
    return response.data;
  },
};
