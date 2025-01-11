import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { format } from 'date-fns';
import { Program } from '../types';

type ProgramCardProps = {
  program: Program;
  onClick?: () => void;
};

export const ProgramCard = ({ program, onClick }: ProgramCardProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? { opacity: 0.8 } : undefined,
      }}
      onClick={onClick}
    >
      {program.image && (
        <CardMedia component="img" sx={{ width: 140 }} image={program.image} alt={program.title} />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {format(program.start_time, 'HH:mm')} - {format(program.end_time, 'HH:mm')}
          </Typography>
          <Typography variant="h6" component="div">
            {program.title}
          </Typography>
          {program.personalities && (
            <Typography variant="body2" color="text.secondary">
              {program.personalities}
            </Typography>
          )}
          {program.desc && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              {program.desc}
            </Typography>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};
