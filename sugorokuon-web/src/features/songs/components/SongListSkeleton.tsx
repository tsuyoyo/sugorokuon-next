import { List, ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';

type SongListSkeletonProps = {
  count?: number;
};

export const SongListSkeleton = ({ count = 5 }: SongListSkeletonProps) => {
  return (
    <List>
      {Array.from({ length: count }).map((_, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemAvatar>
            <Skeleton variant="rectangular" width={40} height={40} />
          </ListItemAvatar>
          <ListItemText
            primary={<Skeleton variant="text" width="60%" />}
            secondary={
              <>
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="30%" />
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
