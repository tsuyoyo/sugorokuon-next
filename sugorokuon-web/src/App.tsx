import React from 'react';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto';
import HomePage from './pages/HomePage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ja } from 'date-fns/locale';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <CssBaseline />
        <HomePage />
      </LocalizationProvider>
    </BrowserRouter>
  );
};

export default App;
