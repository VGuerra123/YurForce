import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

interface GameCardProps {
  title: string;
  console: string;
  genre: string;
  imageUrl: string;
  delay?: number;
}

const GameCard: React.FC<GameCardProps> = ({ 
  title, 
  console: consoleName, 
  genre, 
  imageUrl, 
  delay = 0 
}) => {
  const { playHoverSound, playClickSound } = useAudio();
  
  return (
    <motion.div 
      className="game-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      onMouseEnter={playHoverSound}
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-[#ff00e5] text-[#0a0a2e] text-xs font-bold rounded">
          {consoleName}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#e0e0ff] mb-1 truncate">{title}</h3>
        <p className="text-[#a0a0d0] text-sm mb-3">{genre}</p>
        
        <button 
          className="w-full py-2 flex items-center justify-center bg-[#151542] hover:bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff] rounded transition-colors"
          onClick={playClickSound}
        >
          <Download size={16} className="mr-2" />
          <span>Download ROM</span>
        </button>
      </div>
    </motion.div>
  );
};

export default GameCard;