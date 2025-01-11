import { Box, Typography, Paper } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import {
  sortedSongsAtom,
  fetchRecentSongsAtom,
  fetchStationSongsAtom,
  selectedStationIdAtom,
  sortFieldAtom,
  sortOrderAtom,
  songsLoadingAtom,
  songsErrorAtom,
} from '../features/songs/stores/songStore';
import { selectedRegionAtom } from '../features/regions/stores/regionStore';
import { SongList } from '../features/songs/components/SongList';
import { SongListSkeleton } from '../features/songs/components/SongListSkeleton';
import { SongControls } from '../features/songs/components/SongControls';
import { useEffect } from 'react';
import { ErrorAlert } from '../shared/components/ErrorAlert';

export const SongsPage = () => {
  const selectedRegion = useAtomValue(selectedRegionAtom);
  const sortedSongs = useAtomValue(sortedSongsAtom);
  const [selectedStationId, setSelectedStationId] = useAtom(selectedStationIdAtom);
  const [sortField, setSortField] = useAtom(sortFieldAtom);
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);
  const [, fetchRecentSongs] = useAtom(fetchRecentSongsAtom);
  const [, fetchStationSongs] = useAtom(fetchStationSongsAtom);
  const loadingState = useAtomValue(songsLoadingAtom);
  const [error, setError] = useAtom(songsErrorAtom);

  useEffect(() => {
    if (selectedStationId) {
      fetchStationSongs(selectedStationId);
    } else {
      fetchRecentSongs(20);
    }
  }, [selectedStationId, fetchStationSongs, fetchRecentSongs]);

  if (!selectedRegion) {
    return (
      <Typography variant="h6" color="text.secondary" align="center">
        地域を選択してください
      </Typography>
    );
  }

  return (
    <Box>
      <ErrorAlert error={error} onClose={() => setError(null)} />

      <Typography variant="h4" component="h1" gutterBottom>
        最近放送された楽曲
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <SongControls
          stations={selectedRegion.stations}
          selectedStationId={selectedStationId}
          onStationChange={setSelectedStationId}
          sortField={sortField}
          onSortFieldChange={setSortField}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />
      </Paper>
      <Paper sx={{ p: 2 }}>
        {loadingState === 'loading' ? (
          <SongListSkeleton count={10} />
        ) : (
          <SongList songs={sortedSongs} />
        )}
      </Paper>
    </Box>
  );
};
