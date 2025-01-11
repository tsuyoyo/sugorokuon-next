import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, IconButton, Collapse } from '@mui/material';
import { apiClient } from '../shared/api/client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
  // YYYYMMDDHHmmss形式の文字列をDateオブジェクトに変換
  const year = parseInt(timeStr.substring(0, 4), 10);
  const month = parseInt(timeStr.substring(4, 6), 10) - 1;
  const day = parseInt(timeStr.substring(6, 8), 10);
  const hour = parseInt(timeStr.substring(8, 10), 10);
  const minute = parseInt(timeStr.substring(10, 12), 10);

  return new Date(year, month, day, hour, minute).toLocaleTimeString('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const HomePage: React.FC = () => {
  const [timetableData, setTimetableData] = useState<RegionWithTimetables[]>([]);
  const [expandedRegions, setExpandedRegions] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const timetablesResponse = await apiClient.get<ApiResponse>('/timetables');
        setTimetableData(timetablesResponse.data.regions);
        // 初期状態では最初の地域だけを展開
        const initialExpanded = timetablesResponse.data.regions.reduce(
          (acc, region, index) => {
            acc[region.id] = index === 0;
            return acc;
          },
          {} as { [key: string]: boolean },
        );
        setExpandedRegions(initialExpanded);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchTimetables();
  }, []);

  const handleToggleRegion = (regionId: string) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [regionId]: !prev[regionId],
    }));
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
                        variant="subtitle1"
                        sx={{ fontSize: '0.75rem', fontWeight: 'bold', mb: 0.5 }}
                      >
                        {program.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.7rem', mb: 0.5 }}
                      >
                        {formatTime(program.start_time)} - {formatTime(program.end_time)}
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

  return <Box sx={{ p: 3 }}>{renderTimetablesByRegion()}</Box>;
};

export default HomePage;
