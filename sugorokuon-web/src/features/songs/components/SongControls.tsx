import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Tooltip,
} from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { Station } from '../../regions/types';
import { SortField, SortOrder } from '../stores/songStore';

type SongControlsProps = {
  stations: Station[];
  selectedStationId?: string;
  onStationChange: (stationId: string) => void;
  sortField: SortField;
  onSortFieldChange: (field: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
};

export const SongControls = ({
  stations,
  selectedStationId,
  onStationChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
}: SongControlsProps) => {
  const handleStationChange = (event: SelectChangeEvent) => {
    onStationChange(event.target.value);
  };

  const handleSortFieldChange = (event: SelectChangeEvent) => {
    onSortFieldChange(event.target.value as SortField);
  };

  const toggleSortOrder = () => {
    onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel id="station-select-label">放送局</InputLabel>
          <Select
            labelId="station-select-label"
            id="station-select"
            value={selectedStationId || ''}
            label="放送局"
            onChange={handleStationChange}
          >
            <MenuItem value="">全放送局</MenuItem>
            {stations.map((station) => (
              <MenuItem key={station.id} value={station.id}>
                {station.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={10} md={4}>
        <FormControl fullWidth>
          <InputLabel id="sort-field-label">並び替え</InputLabel>
          <Select
            labelId="sort-field-label"
            id="sort-field"
            value={sortField}
            label="並び替え"
            onChange={handleSortFieldChange}
          >
            <MenuItem value="onAirTime">放送時間</MenuItem>
            <MenuItem value="title">曲名</MenuItem>
            <MenuItem value="artist">アーティスト</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} md={4}>
        <Tooltip title={sortOrder === 'asc' ? '昇順' : '降順'}>
          <IconButton onClick={toggleSortOrder}>
            {sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};
