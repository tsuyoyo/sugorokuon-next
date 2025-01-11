import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Station } from '../../regions/types';

type StationSelectorProps = {
  stations: Station[];
  selectedStationId: string;
  onStationChange: (stationId: string) => void;
};

export const StationSelector = ({
  stations,
  selectedStationId,
  onStationChange,
}: StationSelectorProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onStationChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="station-select-label">放送局</InputLabel>
      <Select
        labelId="station-select-label"
        id="station-select"
        value={selectedStationId || ''}
        label="放送局"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>選択してください</em>
        </MenuItem>
        {stations.map((station) => (
          <MenuItem key={station.id} value={station.id || ''}>
            {station.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
