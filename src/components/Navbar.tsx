import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../../public/assets/Hero/logo2.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Acerca de' },
    { path: '/theme', label: 'Tema' },
    { path: '/downloads', label: 'Descargas' },
    { path: '/catalog', label: 'Juegos' },
    { path: '/legal', label: 'Aviso legal' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#151542]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="YurForce Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110"
            />
          </NavLink>

          {/* Links desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-[#00e5ff] text-glow'
                      : 'text-[#e0e0ff] hover:text-[#00e5ff]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#e0e0ff] hover:text-[#00e5ff] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#151542]/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider py-2 transition-all ${
                    isActive
                      ? 'text-[#00e5ff] text-glow'
                      : 'text-[#e0e0ff] hover:text-[#00e5ff]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
