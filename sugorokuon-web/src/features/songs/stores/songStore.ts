import { atom } from 'jotai';
import { Song } from '../types';
import { songsApi } from '../api/songsApi';
import { ApiError, LoadingState } from '../../../shared/types/error';
import { AxiosError } from 'axios';

export type SortOrder = 'asc' | 'desc';
export type SortField = 'onAirTime' | 'title' | 'artist';

export const recentSongsAtom = atom<Song[]>([]);
export const stationSongsAtom = atom<Record<string, Song[]>>({});
export const selectedStationIdAtom = atom<string | undefined>(undefined);
export const sortFieldAtom = atom<SortField>('onAirTime');
export const sortOrderAtom = atom<SortOrder>('desc');
export const songsLoadingAtom = atom<LoadingState>('idle');
export const songsErrorAtom = atom<ApiError | null>(null);

export const sortedSongsAtom = atom((get) => {
  const songs = get(selectedStationIdAtom)
    ? get(stationSongsAtom)[get(selectedStationIdAtom)!] || []
    : get(recentSongsAtom);
  const sortField = get(sortFieldAtom);
  const sortOrder = get(sortOrderAtom);

  return [...songs].sort((a, b) => {
    let comparison = 0;
    switch (sortField) {
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'artist':
        comparison = (a.artist?.name || '').localeCompare(b.artist?.name || '');
        break;
      case 'onAirTime':
        comparison = a.onAirTime.localeCompare(b.onAirTime);
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });
});

export const fetchRecentSongsAtom = atom(null, async (get, set, limit?: number) => {
  try {
    set(songsLoadingAtom, 'loading');
    set(songsErrorAtom, null);
    const songs = await songsApi.getRecentSongs(limit);
    set(recentSongsAtom, songs);
    set(songsLoadingAtom, 'success');
  } catch (error) {
    const axiosError = error as AxiosError;
    set(songsErrorAtom, {
      status: axiosError.response?.status || 500,
      message: axiosError.message || 'データの取得に失敗しました',
    });
    set(songsLoadingAtom, 'error');
  }
});

export const fetchStationSongsAtom = atom(null, async (get, set, stationId: string) => {
  try {
    set(songsLoadingAtom, 'loading');
    set(songsErrorAtom, null);
    const songs = await songsApi.getSongsByStation(stationId);
    set(stationSongsAtom, (prev) => ({
      ...prev,
      [stationId]: songs,
    }));
    set(selectedStationIdAtom, stationId);
    set(songsLoadingAtom, 'success');
  } catch (error) {
    const axiosError = error as AxiosError;
    set(songsErrorAtom, {
      status: axiosError.response?.status || 500,
      message: axiosError.message || 'データの取得に失敗しました',
    });
    set(songsLoadingAtom, 'error');
  }
});
