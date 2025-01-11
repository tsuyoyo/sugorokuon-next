import { Box, Typography, Grid, Paper } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import {
  programsAtom,
  selectedDateAtom,
  selectedStationIdAtom,
  fetchProgramsAtom,
  programsLoadingAtom,
  programsErrorAtom,
} from '../features/programs/stores/programStore';
import { selectedRegionAtom } from '../features/regions/stores/regionStore';
import { ProgramCard } from '../features/programs/components/ProgramCard';
import { ProgramCardSkeleton } from '../features/programs/components/ProgramCardSkeleton';
import { DateSelector } from '../features/programs/components/DateSelector';
import { StationSelector } from '../features/programs/components/StationSelector';
import { useEffect } from 'react';
import { ErrorAlert } from '../shared/components/ErrorAlert';

export const ProgramsPage = () => {
  const selectedRegion = useAtomValue(selectedRegionAtom);
  const programs = useAtomValue(programsAtom);
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [selectedStationId, setSelectedStationId] = useAtom(selectedStationIdAtom);
  const [, fetchPrograms] = useAtom(fetchProgramsAtom);
  const loadingState = useAtomValue(programsLoadingAtom);
  const [error, setError] = useAtom(programsErrorAtom);

  useEffect(() => {
    if (selectedRegion?.stations[0]) {
      const stationId = selectedStationId || selectedRegion.stations[0].id;
      fetchPrograms(stationId);
    }
  }, [selectedRegion, selectedDate, selectedStationId, fetchPrograms]);

  if (!selectedRegion) {
    return (
      <Typography variant="h6" color="text.secondary" align="center">
        地域を選択してください
      </Typography>
    );
  }

  const renderPrograms = () => {
    if (loadingState === 'loading') {
      return Array.from({ length: 5 }).map((_, index) => (
        <Grid item xs={12} key={index}>
          <ProgramCardSkeleton />
        </Grid>
      ));
    }

    return programs.map((program) => (
      <Grid item xs={12} key={program.id}>
        <ProgramCard program={program} />
      </Grid>
    ));
  };

  return (
    <Box>
      <ErrorAlert error={error} onClose={() => setError(null)} />

      <Typography variant="h4" component="h1" gutterBottom>
        番組表
      </Typography>
      <Paper sx={{ p: 2, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </Grid>
          <Grid item xs={12} md={6}>
            <StationSelector
              stations={selectedRegion.stations}
              selectedStationId={selectedStationId || selectedRegion.stations[0].id}
              onStationChange={setSelectedStationId}
            />
          </Grid>
        </Grid>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {selectedRegion.regionName} - {selectedDate}
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        {renderPrograms()}
      </Grid>
    </Box>
  );
};
