import { apiClient, ApiResponse } from '../../../shared/api/client';
import { Program } from '../types';

export const programsApi = {
  getProgramsByStation: async (stationId: string, date?: string): Promise<Program[]> => {
    const params = date ? { date } : {};
    const response = await apiClient.get<ApiResponse<Program[]>>(
      `/stations/${stationId}/programs`,
      {
        params,
      },
    );
    return response.data.data.map((program) => ({
      ...program,
      start_time: new Date(program.start_time),
      end_time: new Date(program.end_time),
    }));
  },

  getProgram: async (programId: string): Promise<Program> => {
    const response = await apiClient.get<ApiResponse<Program>>(`/programs/${programId}`);
    const program = response.data.data;
    return {
      ...program,
      start_time: new Date(program.start_time),
      end_time: new Date(program.end_time),
    };
  },
};
