import React, { useEffect, useState } from 'react';
import { Power } from 'lucide-react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-[#0a0a2e] z-50 flex flex-col items-center justify-center text-[#e0e0ff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
        className="mb-8"
      >
        <Power size={64} color="#00e5ff" />
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        YurForce
      </motion.h1>
      
      <div className="w-64 md:w-96 h-2 bg-[#151542] rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#00e5ff] to-[#ff00e5]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
      
      <motion.p 
        className="mt-4 text-[#a0a0d0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Initializing Virtual Console... {Math.min(100, Math.round(progress))}%
      </motion.p>
      
      <motion.div 
        className="absolute bottom-4 text-xs text-center text-[#a0a0d0] w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
      >
        <p>YurForce Virtual Console Experience</p>
        <p>© 2025 All rights reserved</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;