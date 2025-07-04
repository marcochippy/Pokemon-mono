import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import LoginPage from './pages/LoginPage';
import LeaderboardPage from './pages/LeaderboardPage';
import HowToPlay from './pages/HowToPlay';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="pokedex" element={<PokedexPage />} />
          <Route path="howtoplay" element={<HowToPlay />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
