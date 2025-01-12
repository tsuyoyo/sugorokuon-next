import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, IconButton, Collapse, Alert } from '@mui/material';
import { apiClient } from '../shared/api/client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DatePicker } from '@mui/x-date-pickers';
import { useSearchParams } from 'react-router-dom';
import { format, parse, addDays, subDays, isWithinInterval } from 'date-fns';

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

const formatTime = (timeStr: string) => {
  try {
    // APIから返ってくる時刻をログ出力して確認
    console.log('Time string:', timeStr);

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

const EXPANDED_REGIONS_KEY = 'expandedRegions';

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [timetableData, setTimetableData] = useState<RegionWithTimetables[]>([]);
  const [expandedRegions, setExpandedRegions] = useState<{ [key: string]: boolean }>(() => {
    // localStorageから展開状態を復元
    const saved = localStorage.getItem(EXPANDED_REGIONS_KEY);
    return saved ? JSON.parse(saved) : {};
  });
  const [dateError, setDateError] = useState<string | null>(null);

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

  useEffect(() => {
    if (!isDateValid) {
      setDateError('指定された日付は範囲外です。今日から前後1週間の範囲で指定してください。');
      setSelectedDate(today);
      const todayStr = format(today, 'yyyyMMdd');
      setSearchParams({ date: todayStr });
    } else {
      setDateError(null);
    }
  }, []);

  const fetchTimetables = async (date: Date) => {
    try {
      const dateStr = format(date, 'yyyyMMdd');
      const timetablesResponse = await apiClient.get<ApiResponse>(`/timetables/date/${dateStr}`);
      setTimetableData(timetablesResponse.data.regions);

      // 初回のみ、保存された状態がない場合は最初の地域を展開
      if (Object.keys(expandedRegions).length === 0) {
        const initialExpanded = timetablesResponse.data.regions.reduce(
          (acc, region, index) => {
            acc[region.id] = index === 0;
            return acc;
          },
          {} as { [key: string]: boolean },
        );
        setExpandedRegions(initialExpanded);
        localStorage.setItem(EXPANDED_REGIONS_KEY, JSON.stringify(initialExpanded));
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchTimetables(selectedDate);
  }, [selectedDate]);

  // URLのクエリパラメータと同期
  useEffect(() => {
    const dateStr = format(selectedDate, 'yyyyMMdd');
    setSearchParams({ date: dateStr });
  }, [selectedDate, setSearchParams]);

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

  const handleToggleRegion = (regionId: string) => {
    setExpandedRegions((prev) => {
      const newState = {
        ...prev,
        [regionId]: !prev[regionId],
      };
      // 状態をlocalStorageに保存
      localStorage.setItem(EXPANDED_REGIONS_KEY, JSON.stringify(newState));
      return newState;
    });
  };

  const renderTimetablesByRegion = () => {
    return timetableData.map((region) => (
      <Paper key={region.id} sx={{ mb: 2, overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            cursor: 'pointer',
            bgcolor: 'grey.100',
          }}
          onClick={() => handleToggleRegion(region.id)}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {region.name}
          </Typography>
          <IconButton size="small">
            {expandedRegions[region.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>

        <Collapse in={expandedRegions[region.id]}>
          <Box sx={{ p: 2 }}>
            {region.stations.map((stationTimetable) => (
              <Box key={stationTimetable.stationId} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  {stationTimetable.stationName || '放送局名なし'}
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
                  {stationTimetable.programs.map((program: Program, index: number) => (
                    <Paper
                      key={`${stationTimetable.stationId}-${program.id}-${index}`}
                      elevation={0}
                      sx={{
                        minWidth: 140,
                        backgroundColor: 'grey.50',
                        p: 1,
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
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.7rem', mb: 0.5 }}
                      >
                        {formatTime(program.start_time)} - {formatTime(program.end_time)}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontSize: '0.75rem', fontWeight: 'bold', mb: 0.5 }}
                      >
                        {program.title}
                      </Typography>
                      {program.personalities && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.7rem' }}
                        >
                          {program.personalities}
                        </Typography>
                      )}
                    </Paper>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Paper>
    ));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
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
        {dateError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {dateError}
          </Alert>
        )}
      </Box>
      {renderTimetablesByRegion()}
    </Box>
  );
};

export default HomePage;
