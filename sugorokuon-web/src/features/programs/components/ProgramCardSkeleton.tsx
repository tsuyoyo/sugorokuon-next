import { Card, CardContent, Box, Skeleton } from '@mui/material';

export const ProgramCardSkeleton = () => {
  return (
    <Card sx={{ display: 'flex' }}>
      <Skeleton variant="rectangular" sx={{ width: 140, height: 140 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          <Skeleton variant="text" width="20%" height={24} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="40%" height={24} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
        </CardContent>
      </Box>
    </Card>
  );
};
