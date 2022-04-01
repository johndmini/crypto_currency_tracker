import React from 'react';
import Nav from './components/Nav';
import CEXCurrency from './pages/CEXCurrency';
import DeFiPage from './pages/DeFiPage.js';
import Trending from './pages/TrendingPage';
import SearchedToken from './pages/SearchResultsPage';
import TargetToken from './CEXData/TargetTokenInfo';
import { Box } from '@mui/material';
import { CoinDataProvider } from './CEXData/provider';
import { Routes, Route } from 'react-router';
import './index.css';

export default function App() {
  return (
    <Box>
      <CoinDataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<CEXCurrency />} />
          <Route path="/DeFiPage" element={<DeFiPage />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/SearchedToken" element={<SearchedToken />} />
          <Route path="/TargetToken" element={<TargetToken />} />
        </Routes>
      </CoinDataProvider>
    </Box>
  );
}
