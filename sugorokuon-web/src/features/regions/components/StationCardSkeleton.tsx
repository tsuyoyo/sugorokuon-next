import { Card, CardContent, Box, Skeleton } from '@mui/material';

export const StationCardSkeleton = () => {
  return (
    <Card>
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <Skeleton
          variant="rectangular"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <CardContent>
        <Skeleton variant="text" width="80%" height={32} />
      </CardContent>
    </Card>
  );
};
