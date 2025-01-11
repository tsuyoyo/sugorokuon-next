import { Box, Typography, Paper, Drawer, IconButton, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import { ErrorAlert } from '../shared/components/ErrorAlert';
import { apiClient } from '../shared/api/client';
import { ApiError } from '../shared/types/error';
import CloseIcon from '@mui/icons-material/Close';

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

const parseDescription = (text: string): string => {
  if (!text) return '';

  // XMLヘッダーと<root>タグを除去
  let parsed = text.replace(/<\?xml[^>]+\?>/, '').replace(/<\/?root>/g, '');

  // HTMLエンティティをデコード
  parsed = parsed
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');

  // <br>タグを改行に変換
  parsed = parsed.replace(/<br\s*\/?>/g, '\n');

  // その他のHTMLタグを除去
  parsed = parsed.replace(/<[^>]+>/g, '');

  return parsed.trim();
};

export const HomePage = () => {
  const [timetables, setTimetables] = useState<Timetable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

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

  const handleProgramClick = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleCloseDrawer = () => {
    setSelectedProgram(null);
  };

  const renderProgramDetail = () => {
    if (!selectedProgram) return null;

    const description = selectedProgram.desc ? parseDescription(selectedProgram.desc) : '';
    const info = selectedProgram.info ? parseDescription(selectedProgram.info) : '';

    // メールアドレスを抽出
    const emailMatch = description.match(/mailto:([^\s"']+)/);
    const email = emailMatch ? emailMatch[1] : null;

    return (
      <Box sx={{ width: '100%', p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
            番組詳細
          </Typography>
          <IconButton onClick={handleCloseDrawer} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {selectedProgram.image && (
          <Box
            component="img"
            src={selectedProgram.image}
            alt={selectedProgram.title}
            sx={{
              width: '100%',
              height: 240,
              objectFit: 'cover',
              borderRadius: 1,
              mb: 3,
            }}
          />
        )}

        <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem' }}>
          {selectedProgram.title}
        </Typography>

        <Typography variant="body1" color="text.secondary" gutterBottom>
          {new Date(selectedProgram.start_time).toLocaleTimeString('ja-JP', {
            hour: '2-digit',
            minute: '2-digit',
          })}
          {' - '}
          {new Date(selectedProgram.end_time).toLocaleTimeString('ja-JP', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Typography>

        {selectedProgram.personalities && (
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {selectedProgram.personalities}
          </Typography>
        )}

        {description && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {description}
            </Typography>
            {email && (
              <Link href={`mailto:${email}`} sx={{ display: 'block', mt: 2 }} underline="hover">
                {email}
              </Link>
            )}
          </Box>
        )}

        {info && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
              {info}
            </Typography>
          </Box>
        )}

        {selectedProgram.url && (
          <Box sx={{ mt: 3 }}>
            <Link
              href={selectedProgram.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              番組ページを開く
            </Link>
          </Box>
        )}
      </Box>
    );
  };

  const renderStationPrograms = (timetable: Timetable) => {
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
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {programs.map((program, index) => (
            <Paper
              key={`${stationId}-${program.id}-${index}`}
              elevation={0}
              onClick={() => handleProgramClick(program)}
              sx={{
                p: 1,
                minWidth: 140,
                backgroundColor: 'grey.50',
                borderRadius: 1,
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
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
      <Drawer
        anchor="right"
        open={selectedProgram !== null}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: '40%',
            minWidth: 400,
            maxWidth: 800,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {renderProgramDetail()}
      </Drawer>
    </Box>
  );
};
