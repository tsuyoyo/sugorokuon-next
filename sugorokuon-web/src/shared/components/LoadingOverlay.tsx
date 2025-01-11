import { Backdrop, CircularProgress } from '@mui/material';
import { LoadingState } from '../types/error';

type LoadingOverlayProps = {
  state: LoadingState;
};

export const LoadingOverlay = ({ state }: LoadingOverlayProps) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={state === 'loading'}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
