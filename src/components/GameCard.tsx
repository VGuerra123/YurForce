// src/components/GameCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Game {
  id: number;
  title: string;
  description: string;
  consola: string;
  img: string;
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <motion.div
      className="relative rounded-xl backdrop-blur-md border border-white/10 bg-white/10 hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 flex items-center justify-center bg-black/10">
        <img
          src={game.img}
          alt={game.title}
          onError={(e) => (e.currentTarget.src = '/assets/placeholder.png')}
          className="object-contain h-full p-4 transition-opacity duration-300"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-white font-bold text-lg drop-shadow">{game.title}</h3>
      </div>

      <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg backdrop-blur">
        {game.consola}
      </div>
    </motion.div>
  );
};

export default GameCard;
