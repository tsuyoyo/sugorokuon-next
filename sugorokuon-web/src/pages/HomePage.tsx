import { Box, Typography, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { ErrorAlert } from '../shared/components/ErrorAlert';
import { apiClient } from '../shared/api/client';
import { ApiError } from '../shared/types/error';

interface Program {
  id: string;
  title: string;
  start_time: string;
  end_time: string;
  personalities: string | null;
  image: string | null;
  url: string | null;
  desc: string | null;
  info: string | null;
}

interface Timetable {
  stationId: string;
  stationName: string;
  date: string;
  programs: Program[];
}

export const HomePage = () => {
  const [timetables, setTimetables] = useState<Timetable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<Timetable[]>('/timetables');
        console.log('API Response:', response.data);
        setTimetables(response.data);
      } catch (err) {
        console.error('API Error:', err);
        setError({
          status: err instanceof Error ? 500 : 0,
          message: err instanceof Error ? err.message : '番組表の取得に失敗しました',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTimetables();
  }, []);

  const renderStationPrograms = (timetable: Timetable) => {
    console.log('Rendering timetable:', timetable);
    const { stationId, stationName, programs } = timetable;

    return (
      <Box key={stationId} sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 1, fontSize: '1.1rem' }}>
          {stationName || '放送局名なし'}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            overflowX: 'auto',
            pb: 1,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none', // IE and Edge
            scrollbarWidth: 'none', // Firefox
          }}
        >
          {programs.map((program) => (
            <Paper
              key={program.id}
              elevation={0}
              sx={{
                p: 1,
                minWidth: 140,
                backgroundColor: 'grey.50',
                borderRadius: 1,
              }}
            >
              {program.image && (
                <Box
                  component="img"
                  src={program.image}
                  alt={program.title}
                  sx={{
                    width: '100%',
                    height: 84,
                    objectFit: 'cover',
                    borderRadius: 0.5,
                    mb: 0.5,
                  }}
                />
              )}
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: '0.75rem' }}
              >
                {program.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ fontSize: '0.7rem' }}
              >
                {new Date(program.start_time).toLocaleTimeString('ja-JP', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                {' - '}
                {new Date(program.end_time).toLocaleTimeString('ja-JP', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Typography>
              {program.personalities && (
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                  {program.personalities}
                </Typography>
              )}
            </Paper>
          ))}
        </Box>
      </Box>
    );
  };

  if (loading) {
    return (
      <Typography variant="h6" color="text.secondary" align="center">
        番組表を読み込んでいます...
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <ErrorAlert error={error} onClose={() => setError(null)} />
      {timetables.map(renderStationPrograms)}
    </Box>
  );
};
