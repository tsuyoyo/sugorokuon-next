import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './shared/components/Layout';
import { Provider } from 'jotai';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { SongsPage } from './pages/SongsPage';

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/songs" element={<SongsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
