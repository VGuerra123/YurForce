import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAudio } from '../hooks/useAudio';
import logo from '../assets/Hero/logo2.png'; // Importamos el logo

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { soundEnabled, toggleSound, playHoverSound, playClickSound } = useAudio();

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Acerca de' },
    { path: '/theme', label: 'Tema' },
    { path: '/downloads', label: 'Descargas' },
    { path: '/catalog', label: 'Juegos' },
    { path: '/legal', label: 'Aviso legal' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#151542]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center" onClick={playClickSound} onMouseEnter={playHoverSound}>
            <img src={logo} alt="YurForce Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Navegación de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-[#00e5ff] text-glow'
                      : 'text-[#e0e0ff] hover:text-[#00e5ff]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <button
              onClick={() => {
                toggleSound();
                playClickSound();
              }}
              className="text-[#e0e0ff] hover:text-[#00e5ff] transition-colors"
              onMouseEnter={playHoverSound}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                playClickSound();
              }}
              className="text-[#e0e0ff] hover:text-[#00e5ff] transition-colors"
              onMouseEnter={playHoverSound}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#151542]/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {links.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsOpen(false);
                    playClickSound();
                  }}
                  onMouseEnter={playHoverSound}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-wider py-2 transition-all ${
                      isActive
                        ? 'text-[#00e5ff] text-glow'
                        : 'text-[#e0e0ff] hover:text-[#00e5ff]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  toggleSound();
                  playClickSound();
                }}
                className="flex items-center space-x-2 text-[#e0e0ff] hover:text-[#00e5ff] transition-colors py-2"
                onMouseEnter={playHoverSound}
              >
                {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                <span>{soundEnabled ? 'Sonido activado' : 'Sonido desactivado'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
