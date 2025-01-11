import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Region } from '../types';

type RegionSelectProps = {
  regions: Region[];
  selectedRegionId?: string;
  onRegionChange: (regionId: string) => void;
};

export const RegionSelect = ({
  regions = [],
  selectedRegionId,
  onRegionChange,
}: RegionSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onRegionChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="region-select-label">地域</InputLabel>
      <Select
        labelId="region-select-label"
        id="region-select"
        value={selectedRegionId || ''}
        label="地域"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>選択してください</em>
        </MenuItem>
        {regions.map((region) => (
          <MenuItem key={region.regionId} value={region.regionId || ''}>
            {region.regionName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
