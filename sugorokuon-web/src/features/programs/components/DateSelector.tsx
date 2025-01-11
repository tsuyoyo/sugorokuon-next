import { TextField } from '@mui/material';

type DateSelectorProps = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export const DateSelector = ({ selectedDate, onDateChange }: DateSelectorProps) => {
  return (
    <TextField
      type="date"
      value={selectedDate}
      onChange={(e) => onDateChange(e.target.value)}
      label="日付"
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
    />
  );
};
