import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/assets/Hero/logo2.png'; // Logo YurForce

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(id);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a2e] z-50 flex flex-col items-center justify-center text-[#e0e0ff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Logo animado */}
      <motion.img
        src={logo}
        alt="YurForce Logo"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-8 h-16 w-auto"
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        YurForce
      </motion.h1>

      {/* Barra de progreso */}
      <div className="w-64 md:w-96 h-2 bg-[#151542] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00e5ff] to-[#ff00e5]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        className="mt-4 text-[#a0a0d0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Inicializando consola virtual… {Math.min(100, Math.round(progress))}%
      </motion.p>

      <motion.div
        className="absolute bottom-4 text-xs text-center text-[#a0a0d0] w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
      >
        <p>Experiencia de consola virtual YurForce</p>
        <p>© 2025 Todos los derechos reservados</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
