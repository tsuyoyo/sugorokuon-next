import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
          >
            すごろくおん
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            ホーム
          </Button>
          <Button color="inherit" component={RouterLink} to="/programs">
            番組表
          </Button>
          <Button color="inherit" component={RouterLink} to="/songs">
            楽曲
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>
    </Box>
  );
};
