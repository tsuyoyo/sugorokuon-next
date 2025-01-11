import { apiClient, ApiResponse } from '../../../shared/api/client';
import { Song } from '../types';

export const songsApi = {
  getSongsByStation: async (stationId: string): Promise<Song[]> => {
    const response = await apiClient.get<ApiResponse<Song[]>>(`/stations/${stationId}/songs`);
    return response.data.data;
  },

  getRecentSongs: async (limit?: number): Promise<Song[]> => {
    const params = limit ? { limit } : {};
    const response = await apiClient.get<ApiResponse<Song[]>>('/songs/recent', {
      params,
    });
    return response.data.data;
  },
};
