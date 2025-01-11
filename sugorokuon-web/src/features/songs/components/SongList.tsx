import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import { Song } from '../types';

type SongListProps = {
  songs: Song[];
};

export const SongList = ({ songs }: SongListProps) => {
  return (
    <List>
      {songs.map((song, index) => (
        <ListItem key={`${song.title}-${song.onAirTime}-${index}`} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={song.title} src={song.thumbnails?.small} variant="rounded" />
          </ListItemAvatar>
          <ListItemText
            primary={song.title}
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  {song.artist?.name}
                </Typography>
                {' — '}
                {song.onAirTime}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
