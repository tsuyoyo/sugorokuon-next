import { Card, CardContent, CardMedia, Typography, Box, CardActionArea } from '@mui/material';
import { Station } from '../types';
import { useNavigate } from 'react-router-dom';

type StationCardProps = {
  station: Station;
};

export const StationCard = ({ station }: StationCardProps) => {
  const navigate = useNavigate();
  const logo = station.logos.find((l) => l.width >= 200) || station.logos[0];

  return (
    <Card>
      <CardActionArea onClick={() => navigate('/programs')}>
        <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
          <CardMedia
            component="img"
            image={logo?.url || station.banner}
            alt={station.name || ''}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              bgcolor: 'background.default',
              p: 2,
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h6" component="div" noWrap>
            {station.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
