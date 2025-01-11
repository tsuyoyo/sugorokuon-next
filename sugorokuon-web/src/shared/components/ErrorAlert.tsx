import { Alert, AlertTitle, Collapse } from '@mui/material';
import { ApiError } from '../types/error';

type ErrorAlertProps = {
  error: ApiError | null;
  onClose?: () => void;
};

export const ErrorAlert = ({ error, onClose }: ErrorAlertProps) => {
  return (
    <Collapse in={!!error}>
      {error && (
        <Alert severity="error" onClose={onClose}>
          <AlertTitle>エラーが発生しました</AlertTitle>
          {error.message}
        </Alert>
      )}
    </Collapse>
  );
};
