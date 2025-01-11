import { atom } from 'jotai';
import { Region } from '../types';
import { regionsApi } from '../api/regionsApi';
import { ApiError, LoadingState } from '../../../shared/types/error';
import { AxiosError } from 'axios';

export const regionsAtom = atom<Region[]>([]);
export const selectedRegionIdAtom = atom<string | undefined>(undefined);
export const regionsLoadingAtom = atom<LoadingState>('idle');
export const regionsErrorAtom = atom<ApiError | null>(null);

export const selectedRegionAtom = atom((get) => {
  const regions = get(regionsAtom);
  const selectedId = get(selectedRegionIdAtom);
  if (!selectedId) return undefined;
  return regions.find((region) => region.regionId === selectedId);
});

export const fetchRegionsAtom = atom(null, async (get, set) => {
  try {
    set(regionsLoadingAtom, 'loading');
    set(regionsErrorAtom, null);
    const regions = await regionsApi.getRegions();
    set(regionsAtom, regions);
    set(regionsLoadingAtom, 'success');
  } catch (error) {
    const axiosError = error as AxiosError;
    set(regionsErrorAtom, {
      status: axiosError.response?.status || 500,
      message: axiosError.message || 'データの取得に失敗しました',
    });
    set(regionsLoadingAtom, 'error');
  }
});
