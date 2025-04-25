// src/pages/ThemePage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Volume, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const ThemePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Tema YurForce - Consola virtual futurista';
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
        title="El tema YurForce"
        subtitle="Una experiencia futurista e inmersiva en BigBox"
        alignment="center"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* … imágenes … */}
        </motion.div>

        <motion.p
          className="text-[#e0e5ff] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          YurForce es un tema diseñado para transformar tu BigBox en una consola virtual de calidad arcade, 
          con animaciones fluidas y sonidos envolventes.
        </motion.p>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <SectionTitle title="Características clave" subtitle="Qué hace especial a YurForce" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#151542] p-6 rounded-lg">
              <Layers size={36} className="text-[#00e5ff] mb-4" />
              <h3 className="text-xl font-bold mb-3">Diseño moderno</h3>
              <p className="text-[#a0a0d0]">
                Interfaz limpia con animaciones suaves y adaptada a cualquier tamaño de pantalla.
              </p>
            </div>
            <div className="bg-[#151542] p-6 rounded-lg">
              <Palette size={36} className="text-[#ff00e5] mb-4" />
              <h3 className="text-xl font-bold mb-3">Estética futurista</h3>
              <p className="text-[#a0a0d0]">
                Toques neón y alto contraste para una atmósfera sci-fi sin perder legibilidad.
              </p>
            </div>
            <div className="bg-[#151542] p-6 rounded-lg">
              <Volume size={36} className="text-[#ffca00] mb-4" />
              <h3 className="text-xl font-bold mb-3">Experiencia de audio</h3>
              <p className="text-[#a0a0d0]">
                Efectos de sonido personalizados y ambientación sutil que no distrae.
              </p>
            </div>
            <div className="bg-[#151542] p-6 rounded-lg">
              <Zap size={36} className="text-[#00e5ff] mb-4" />
              <h3 className="text-xl font-bold mb-3">Rendimiento óptimo</h3>
              <p className="text-[#a0a0d0]">
                Animaciones a 60 fps incluso en hardware modesto y carga rápida.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <SectionTitle title="Paleta de colores" subtitle="El lenguaje visual de YurForce" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            <div>
              <div className="h-20 bg-[#0a0a2e] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#0a0a2e</p>
              <p className="text-center text-xs text-[#a0a0d0]">Fondo</p>
            </div>
            <div>
              <div className="h-20 bg-[#151542] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#151542</p>
              <p className="text-center text-xs text-[#a0a0d0]">Superficie</p>
            </div>
            <div>
              <div className="h-20 bg-[#00e5ff] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#00e5ff</p>
              <p className="text-center text-xs text-[#a0a0d0]">Primario</p>
            </div>
            <div>
              <div className="h-20 bg-[#ff00e5] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#ff00e5</p>
              <p className="text-center text-xs text-[#a0a0d0]">Secundario</p>
            </div>
            <div>
              <div className="h-20 bg-[#ffca00] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#ffca00</p>
              <p className="text-center text-xs text-[#a0a0d0]">Acento</p>
            </div>
          </div>
          <p className="text-[#a0a0d0]">
            Esta paleta crea un estilo futurista, llamativo y funcional a la vez, con neón para resaltar elementos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <SectionTitle title="Experiencia de navegación" subtitle="Intuitiva y receptiva" />
          <div className="bg-[#151542] p-6 rounded-lg mb-8">
            <p className="text-[#e0e5ff] mb-4">
              Navegación diseñada para mandos y teclado, con secciones lógicas y transiciones fluidas.
            </p>
            <p className="text-[#a0a0d0]">
              Los juegos se muestran en rejillas y listas con filtros intuitivos y desplazamiento suave.
            </p>
          </div>
          {/* … imágenes … */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThemePage;
