import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, IconButton, Alert, CircularProgress, Drawer } from '@mui/material';
import { apiClient } from '../shared/api/client';
import { DatePicker } from '@mui/x-date-pickers';
import { useSearchParams } from 'react-router-dom';
import { format, parse, addDays, subDays, isWithinInterval } from 'date-fns';
import CloseIcon from '@mui/icons-material/Close';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

// APIから返ってくる実際のデータ構造に合わせて型を定義
interface Program {
  id: string;
  title: string;
  url: string | null;
  start_time: string;
  end_time: string;
  personalities: string | null;
  image: string | null;
  desc: string | null;
  info: string | null;
}

interface StationTimetable {
  stationId: string;
  stationName: string | null;
  date: string;
  programs: Program[];
}

interface RegionWithTimetables {
  id: string;
  name: string;
  stations: StationTimetable[];
}

interface ApiResponse {
  regions: RegionWithTimetables[];
}

interface Song {
  title: string;
  onAirTime: string;
  artist: {
    id: string;
    name: string;
    nameEn?: string;
    nameKana?: string;
  };
  thumbnails: {
    large: string;
    medium: string;
    small: string;
  };
}

interface ProgramWithStation extends Program {
  stationName: string | null;
}

const formatTime = (timeStr: string) => {
  try {
    // APIから返ってくる時刻をログ出力して確認
    // console.log('Time string:', timeStr);

    if (!timeStr) return '--:--';

    // ISO 8601形式の場合（例：2024-01-10T15:30:00+09:00）
    if (timeStr.includes('T')) {
      return new Date(timeStr).toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    // YYYYMMDDHHmmss形式の場合
    if (timeStr.length === 14) {
      const year = parseInt(timeStr.substring(0, 4), 10);
      const month = parseInt(timeStr.substring(4, 6), 10) - 1;
      const day = parseInt(timeStr.substring(6, 8), 10);
      const hour = parseInt(timeStr.substring(8, 10), 10);
      const minute = parseInt(timeStr.substring(10, 12), 10);

      return new Date(year, month, day, hour, minute).toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    return '--:--';
  } catch (error) {
    console.error('Error formatting time:', error, timeStr);
    return '--:--';
  }
};

const findCurrentProgramIndex = (programs: Program[]): number => {
  const now = new Date();
  return programs.findIndex((program) => {
    const startTime = new Date(program.start_time);
    const endTime = new Date(program.end_time);
    return startTime <= now && now <= endTime;
  });
};

const parseDescription = (text: string | null): string => {
  if (!text) return '';

  // XML headerとrootタグを削除
  let parsed = text.replace(/<\?xml[^>]*\?>/, '').replace(/<\/?root>/g, '');

  // HTMLエンティティをデコード
  parsed = parsed
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');

  // <br>タグを改行に変換
  parsed = parsed.replace(/<br\s*\/?>/gi, '\n');

  // その他のHTMLタグを削除
  parsed = parsed.replace(/<[^>]*>/g, '');

  return parsed.trim();
};

const MemoizedStationTimetable = React.memo(
  ({
    stationTimetable,
    onScrollToCurrentProgram,
    onProgramClick,
    onMusicClick,
  }: {
    stationTimetable: StationTimetable;
    onScrollToCurrentProgram: (container: HTMLElement, programs: Program[]) => void;
    onProgramClick: (program: Program, stationName: string | null) => void;
    onMusicClick: (stationId: string) => void;
  }) => {
    return (
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              color: 'text.primary',
              letterSpacing: '0.02em',
            }}
          >
            {stationTimetable.stationName || '放送局名なし'}
          </Typography>
          <IconButton
            size="small"
            onClick={() => onMusicClick(stationTimetable.stationId)}
            sx={{ ml: 1 }}
          >
            <MusicNoteIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box
          ref={(el) => {
            if (el instanceof HTMLElement) {
              onScrollToCurrentProgram(el, stationTimetable.programs);
            }
          }}
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            pb: 1,
            pt: 1.5,
            px: 1,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {stationTimetable.programs.map((program: Program, index: number) => (
            <Paper
              key={`${stationTimetable.stationId}-${program.id}-${index}`}
              elevation={0}
              onClick={() => onProgramClick(program, stationTimetable.stationName)}
              sx={{
                minWidth: 140,
                backgroundColor: 'background.paper',
                p: 1.5,
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                border: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  borderColor: 'primary.main',
                  transform: 'scale(1.02)',
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
                    borderRadius: 1.5,
                    mb: 1,
                  }}
                />
              )}
              <Typography
                variant="body2"
                color="primary.main"
                sx={{
                  fontSize: '0.75rem',
                  mb: 0.5,
                  fontFamily: 'monospace',
                  fontWeight: 500,
                }}
              >
                {formatTime(program.start_time)} - {formatTime(program.end_time)}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  mb: 0.5,
                  lineHeight: 1.3,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {program.title}
              </Typography>
              {program.personalities && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: '0.75rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {program.personalities}
                </Typography>
              )}
            </Paper>
          ))}
        </Box>
      </Box>
    );
  },
);

const MemoizedRegion = React.memo(
  ({
    region,
    onScrollToCurrentProgram,
    onProgramClick,
    onMusicClick,
  }: {
    region: RegionWithTimetables;
    onScrollToCurrentProgram: (container: HTMLElement, programs: Program[]) => void;
    onProgramClick: (program: Program, stationName: string | null) => void;
    onMusicClick: (stationId: string) => void;
  }) => {
    return (
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            mt: 2,
            fontSize: '1.1rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
            color: 'text.primary',
          }}
        >
          {region.name}
        </Typography>

        <Box sx={{ pl: 1 }}>
          {region.stations.map((stationTimetable) => (
            <MemoizedStationTimetable
              key={stationTimetable.stationId}
              stationTimetable={stationTimetable}
              onScrollToCurrentProgram={onScrollToCurrentProgram}
              onProgramClick={onProgramClick}
              onMusicClick={onMusicClick}
            />
          ))}
        </Box>
      </Box>
    );
  },
);

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [timetableData, setTimetableData] = useState<RegionWithTimetables[]>([]);
  const [currentSongs, setCurrentSongs] = useState<Song[]>([]);
  const [dateError, setDateError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramWithStation | null>(null);
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);

  const today = new Date();
  const minDate = subDays(today, 7);
  const maxDate = addDays(today, 7);

  // 初期日付の取得と検証
  const initialDate = searchParams.get('date')
    ? parse(searchParams.get('date')!, 'yyyyMMdd', new Date())
    : today;

  // 日付が範囲内かチェック
  const isDateValid = isWithinInterval(initialDate, { start: minDate, end: maxDate });
  const [selectedDate, setSelectedDate] = useState<Date>(isDateValid ? initialDate : today);

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      if (isWithinInterval(newDate, { start: minDate, end: maxDate })) {
        setSelectedDate(newDate);
        setDateError(null);
      } else {
        setDateError('今日から前後1週間の範囲で指定してください。');
      }
    }
  };

  // URLのクエリパラメータと同期
  useEffect(() => {
    const dateStr = format(selectedDate, 'yyyyMMdd');
    setSearchParams({ date: dateStr });
  }, [selectedDate, setSearchParams]);

  const handleMusicClick = async (stationId: string) => {
    setSelectedStationId(stationId);
    try {
      setIsLoading(true);
      const response = await apiClient.get<Song[]>(`/songs/onair/${stationId}`);
      if (response.data) {
        setCurrentSongs(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch current songs:', error);
      setCurrentSongs([]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderCurrentSongs = () => {
    if (!selectedStationId || currentSongs.length === 0) return null;

    return (
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          pb: 2,
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
        }}
      >
        {currentSongs.map((song) => (
          <Paper
            key={`${song.artist.id}-${song.title}-${song.onAirTime}`}
            elevation={1}
            sx={{ p: 2, minWidth: '300px' }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                component="img"
                src={
                  song.thumbnails.large.includes('jacket_placeholder')
                    ? '/default-song.svg'
                    : song.thumbnails.large
                }
                alt={song.title}
                sx={{
                  width: 84,
                  height: 84,
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />

              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem' }}>
                  {song.title}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1, fontSize: '0.9rem' }}
                >
                  {song.artist.name}
                  {song.artist.nameKana && (
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1, fontSize: '0.8rem' }}
                    >
                      ({song.artist.nameKana})
                    </Typography>
                  )}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  OnAir: {formatTime(song.onAirTime)}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    );
  };

  const fetchTimetables = async (date: Date) => {
    setIsLoading(true);
    try {
      const dateStr = format(date, 'yyyyMMdd');
      const timetablesResponse = await apiClient.get<ApiResponse>(`/timetables/date/${dateStr}`);
      setTimetableData(timetablesResponse.data.regions);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTimetables(selectedDate);
  }, [selectedDate]);

  const scrollToCurrentProgram = (container: HTMLElement, programs: Program[]) => {
    const currentIndex = findCurrentProgramIndex(programs);
    if (currentIndex >= 0) {
      const cardWidth = 140; // カードの幅
      const gap = 12; // カード間のギャップ
      const scrollPosition = (cardWidth + gap) * currentIndex;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const handleProgramClick = (program: Program, stationName: string | null) => {
    setSelectedProgram({ ...program, stationName });
  };

  const handleCloseDrawer = () => {
    setSelectedProgram(null);
  };

  const renderProgramDetail = () => {
    if (!selectedProgram) return null;

    // メールリンクを抽出
    const emailMatch = selectedProgram.desc?.match(/mailto:([^"'>]+)/);
    const emailAddress = emailMatch ? emailMatch[1] : null;

    return (
      <Box sx={{ width: '40vw', minWidth: 400, maxWidth: 800, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
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
              mb: 2,
            }}
          />
        )}

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          {selectedProgram.title}
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 2, fontFamily: 'monospace', fontWeight: 500 }}>
          {formatTime(selectedProgram.start_time)} - {formatTime(selectedProgram.end_time)}
        </Typography>

        {selectedProgram.stationName && (
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
            {selectedProgram.stationName}
          </Typography>
        )}

        {selectedProgram.personalities && (
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, letterSpacing: 0.5 }}>
            {selectedProgram.personalities}
          </Typography>
        )}

        {selectedProgram.desc && (
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.6, letterSpacing: 0.5, whiteSpace: 'pre-line' }}
          >
            {parseDescription(selectedProgram.desc)}
          </Typography>
        )}

        {selectedProgram.info && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
            {parseDescription(selectedProgram.info)}
          </Typography>
        )}

        {selectedProgram.url && (
          <Typography variant="body2" sx={{ mb: 2 }}>
            <a
              href={selectedProgram.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
              番組ページを開く
            </a>
          </Typography>
        )}

        {emailAddress && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            <a href={`mailto:${emailAddress}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {emailAddress}
            </a>
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* 固定ヘッダー部分 */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          bgcolor: 'background.default',
          zIndex: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          pt: 2,
          pb: 2,
          px: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <DatePicker
            label="日付を選択"
            value={selectedDate}
            onChange={handleDateChange}
            format="yyyy/MM/dd"
            minDate={minDate}
            maxDate={maxDate}
            slotProps={{
              textField: {
                size: 'small',
                sx: { width: 200 },
              },
            }}
          />
          {isLoading && <CircularProgress size={20} />}
          {dateError && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {dateError}
            </Alert>
          )}
        </Box>
      </Box>

      {/* メインコンテンツ */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minHeight: 0,
          position: 'relative',
          pb: selectedStationId ? '200px' : 0,
        }}
      >
        {/* 地域ナビゲーション */}
        <Box
          sx={{
            position: 'sticky',
            top: 80,
            flex: '0 0 15%', // 固定比率で幅を設定
            maxWidth: '300px', // 最大幅を制限
            minWidth: '200px', // 最小幅を保証
            height: '100%',
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto',
            pr: 2,
            pl: 3,
            borderRight: '1px solid',
            borderColor: 'divider',
            zIndex: 1,
            bgcolor: 'background.default',
          }}
        >
          {timetableData.map((region) => (
            <Box
              key={region.id}
              onClick={() => {
                const element = document.getElementById(`region-${region.id}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              sx={{
                py: 1.5,
                px: 2,
                cursor: 'pointer',
                borderRadius: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  bgcolor: 'action.hover',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 300,
                  color: 'text.primary',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {region.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* プログラムリスト */}
        <Box
          sx={{
            flex: '1 1 auto', // 残りのスペースを埋める
            pl: 3,
            pr: 3,
            overflowY: 'auto',
            height: '100%',
          }}
        >
          {timetableData.map((region) => (
            <Box key={region.id} id={`region-${region.id}`}>
              <MemoizedRegion
                region={region}
                onScrollToCurrentProgram={scrollToCurrentProgram}
                onProgramClick={handleProgramClick}
                onMusicClick={handleMusicClick}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* OnAir曲情報 */}
      {selectedStationId && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider',
            p: 2,
            height: '200px',
            zIndex: 3,
            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
          >
            <Typography variant="h6">オンエア中の曲</Typography>
            <IconButton onClick={() => setSelectedStationId(null)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          {currentSongs.length > 0 && renderCurrentSongs()}
        </Box>
      )}

      {/* 番組詳細Drawer */}
      <Drawer
        anchor="right"
        open={selectedProgram !== null}
        onClose={handleCloseDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            zIndex: 4,
          },
        }}
      >
        {renderProgramDetail()}
      </Drawer>
    </Box>
  );
};

export default HomePage;
