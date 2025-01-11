import { atom } from 'jotai';
import { Program } from '../types';
import { programsApi } from '../api/programsApi';
import { ApiError, LoadingState } from '../../../shared/types/error';
import { AxiosError } from 'axios';

export const programsAtom = atom<Program[]>([]);
export const selectedDateAtom = atom<string>(new Date().toISOString().split('T')[0]);
export const selectedStationIdAtom = atom<string | undefined>(undefined);
export const programsLoadingAtom = atom<LoadingState>('idle');
export const programsErrorAtom = atom<ApiError | null>(null);

export const fetchProgramsAtom = atom(null, async (get, set, stationId: string) => {
  try {
    set(programsLoadingAtom, 'loading');
    set(programsErrorAtom, null);
    const date = get(selectedDateAtom);
    const programs = await programsApi.getProgramsByStation(stationId, date);
    set(programsAtom, programs);
    set(selectedStationIdAtom, stationId);
    set(programsLoadingAtom, 'success');
  } catch (error) {
    const axiosError = error as AxiosError;
    set(programsErrorAtom, {
      status: axiosError.response?.status || 500,
      message: axiosError.message || 'データの取得に失敗しました',
    });
    set(programsLoadingAtom, 'error');
  }
});

export const selectedProgramAtom = atom<Program | null>(null);
