// src/pages/CatalogPage.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import GameCard from '../components/GameCard';
import { useAudio } from '../hooks/useAudio';
import { gameData } from '../data/gameData';

// Paginación y filtrado
const CatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConsole, setSelectedConsole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const { playHoverSound, playClickSound } = useAudio();

  const consoles = [
    { id: 'all', name: 'Todas las consolas' },
    { id: 'nes', name: 'Nintendo NES' },
    { id: 'snes', name: 'Super Nintendo' },
    { id: 'genesis', name: 'Sega Genesis' },
    { id: 'ps1', name: 'PlayStation' },
    { id: 'n64', name: 'Nintendo 64' },
  ];

  const gamesPerPage = 12;

  // Filtrar juegos
  const filteredGames = gameData.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesConsole = selectedConsole === 'all' || game.console === selectedConsole;
    return matchesSearch && matchesConsole;
  });

  // Paginación
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

  const paginate = (pageNumber: number) => {
    playClickSound();
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = 'Catálogo de juegos - YurForce';
  }, []);

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle
        title="Catálogo de juegos"
        subtitle="Explora nuestra colección de juegos retro"
        alignment="center"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-8 bg-[#151542] p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-[#a0a0d0]" />
              </div>
              <input
                type="text"
                placeholder="Buscar juegos..."
                className="w-full pl-10 pr-4 py-2 bg-[#0a0a2e] text-[#e0e0ff] border border-[#a0a0d0]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00e5ff] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-[#a0a0d0]" />
              </div>
              <select
                className="w-full pl-10 pr-4 py-2 bg-[#0a0a2e] text-[#e0e0ff] border border-[#a0a0d0]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00e5ff] focus:border-transparent appearance-none"
                value={selectedConsole}
                onChange={(e) => setSelectedConsole(e.target.value)}
                onMouseEnter={playHoverSound}
              >
                {consoles.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown size={18} className="text-[#a0a0d0]" />
              </div>
            </div>
          </div>
        </motion.div>

        {currentGames.length > 0 ? (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {currentGames.map((game, index) => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  console={game.consoleName}
                  genre={game.genre}
                  imageUrl={game.imageUrl}
                  delay={index}
                />
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <button
                className="p-2 bg-[#151542] text-[#e0e0ff] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                onMouseEnter={playHoverSound}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="text-[#a0a0d0]">
                Página {currentPage} de {totalPages}
              </div>

              <button
                className="p-2 bg-[#151542] text-[#e0e0ff] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                onMouseEnter={playHoverSound}
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-xl text-[#a0a0d0]">
              No se encontraron juegos. Ajusta tu búsqueda o filtro.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Componente ChevronDown igual, sin texto visible
const ChevronDown = ({ size, className }: { size: number; className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default CatalogPage;
