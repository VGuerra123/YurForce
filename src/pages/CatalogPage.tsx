// src/pages/CatalogPage.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import GameCard from '../components/GameCard';
import { useAudio } from '../hooks/useAudio';
import { gameData } from '../data/gameData';

const consoleNameMap: { [key: string]: string } = {
  atari: "Atari 2600",
  nes: "Nintendo Entertainment System (NES)",
  snes: "Super Nintendo (SNES)",
  genesis: "Sega Genesis / Mega Drive",
  ps1: "PlayStation 1",
  n64: "Nintendo 64",
  ps2: "PlayStation 2",
  xbox: "Xbox (Original)",
  gamecube: "Nintendo GameCube",
  gba: "Game Boy Advance",
  nds: "Nintendo DS",
  ps3: "PlayStation 3",
  xbox360: "Xbox 360",
  ps4: "PlayStation 4",
  switch: "Nintendo Switch",
  ps5: "PlayStation 5",
  series: "Xbox Series X|S",
  master: "Sega Master System",
  dreamcast: "Sega Dreamcast",
  neoGeo: "Neo Geo",
  pcengine: "PC Engine / TurboGrafx-16",
  pc: "MS-DOS / PC Clásico",
  c64: "Commodore 64",
  saturn: "Sega Saturn",
};

const consoles = [
  { id: 'all', name: 'Todas las consolas' },
  ...Object.entries(consoleNameMap).map(([id, name]) => ({ id, name }))
];

const gamesPerPage = 12;

const CatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConsole, setSelectedConsole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const { playHoverSound, playClickSound } = useAudio();

  const filteredGames = gameData.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const consoleName = consoleNameMap[selectedConsole];
    const matchesConsole = selectedConsole === 'all' || game.consola === consoleName;
    return matchesSearch && matchesConsole;
  });

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const displayedGames = filteredGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage);

  useEffect(() => {
    document.title = 'Catálogo de Juegos';
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Catálogo" subtitle="Explora los juegos disponibles" alignment="center" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 mb-10">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Search className="text-white" />
            <input
              type="text"
              placeholder="Buscar juego..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
                playHoverSound();
              }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md w-full md:w-72 text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="text-white" />
            <select
              value={selectedConsole}
              onChange={(e) => {
                setSelectedConsole(e.target.value);
                setCurrentPage(1);
                playClickSound();
              }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white outline-none focus:ring-2 focus:ring-purple-500"
            >
              {consoles.map((console) => (
                <option key={console.id} value={console.id}>
                  {console.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </motion.div>

        <div className="flex justify-center items-center gap-6 mt-16">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition disabled:opacity-40"
          >
            <ChevronLeft />
          </button>
          <span className="text-lg tracking-wide font-semibold">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition disabled:opacity-40"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
