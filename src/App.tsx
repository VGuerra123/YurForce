import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ThemePage from './pages/ThemePage';
import DownloadsPage from './pages/DownloadsPage';
import CatalogPage from './pages/CatalogPage';
import LegalPage from './pages/LegalPage';

// Hooks
import { useAudio } from './hooks/useAudio';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { playNavSound } = useAudio();

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Play sound on navigation changes
    if (!loading) {
      playNavSound();
    }
  }, [location.pathname, loading, playNavSound]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a2e] text-[#e0e0ff] overflow-hidden">
      <Background />
      <Navbar />
      
      <main className="relative z-10 pt-20 pb-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/theme" element={<ThemePage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;