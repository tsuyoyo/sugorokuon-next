import React from 'react';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <HomePage />
    </>
  );
};

export default App;
