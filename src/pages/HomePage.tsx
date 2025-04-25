// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Cpu, Gamepad2 } from 'lucide-react';
import Console3D from '../components/Console3D';
import { useAudio } from '../hooks/useAudio';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { playClickSound } = useAudio();

  useEffect(() => {
    document.title = 'YurForce - Próxima evolución de la consola virtual';
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              YurForce
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-[#a0a0d0] mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              La próxima evolución en la experiencia de consola virtual
            </motion.h2>

            <motion.p
              className="text-[#e0e0ff] mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Descubre una interfaz de emulación revolucionaria inspirada en LaunchBox BigBox.
              Vive tu colección retro como nunca antes, con gráficos asombrosos y navegación fluida.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                className="console-button"
                onClick={() => {
                  playClickSound();
                  navigate('/about');
                }}
              >
                Más información
              </button>

              <button
                className="flex items-center text-[#00e5ff] hover:text-[#e0e0ff] transition-colors"
                onClick={() => {
                  playClickSound();
                  navigate('/downloads');
                }}
              >
                <span>Obtener YurForce ahora</span>
                <ChevronRight size={20} className="ml-1" />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <Console3D />
          </motion.div>
        </div>

        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Experimenta el futuro de los juegos retro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#151542] p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#00e5ff] mb-4">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ultra rápido</h3>
              <p className="text-[#a0a0d0]">
                Rendimiento optimizado con carga instantánea, navegación fluida y animaciones suaves.
              </p>
            </div>

            <div className="bg-[#151542] p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#ff00e5] mb-4">
                <Cpu size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Compatibilidad amplia</h3>
              <p className="text-[#a0a0d0]">
                Soporte para todas las plataformas retro principales e integración perfecta con LaunchBox.
              </p>
            </div>

            <div className="bg-[#151542] p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#ffca00] mb-4">
                <Gamepad2 size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Diseño inmersivo</h3>
              <p className="text-[#a0a0d0]">
                Gráficos impresionantes, efectos de sonido dinámicos e interfaz totalmente personalizable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
