// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ChevronRight } from 'lucide-react';

import Background from '../components/Background';
import { useAudio } from '../hooks/useAudio';

import logo from '../../public/assets/Hero/logo2.png';
import mando1 from '../../public/assets/Hero/mando1.png';
import mando2 from '../../public/assets/Hero/mando2.png';
import mando3 from '../../public/assets/Hero/mando3.png';
import mando4 from '../../public/assets/Hero/mando4.png';
import mandoespecial from '../../public/assets/Hero/mandoespecial.png';
import mando5 from '../../public/assets/Hero/mando5.png';
import mando6 from '../../public/assets/Hero/mando6.png';
import mando7 from '../../public/assets/Hero/mando7.png';

const frames = [
  mando1,
  mando2,
  mando3,
  mando4,
  mandoespecial,
  mando5,
  mando6,
  mando7,
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { playClickSound } = useAudio();

  const [index, setIndex] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  /* ---------------- slideshow ---------------- */
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % frames.length), 4200);
    return () => clearInterval(id);
  }, []);

  /* ------------- fondo parallax -------------- */
  useEffect(() => {
    const handler = ({ clientX, clientY }: MouseEvent) => {
      if (window.innerWidth < 768) return; // desactivar parallax en móviles
      const x = (clientX / window.innerWidth - 0.5) * 10; // ±5 deg
      const y = (clientY / window.innerHeight - 0.5) * 10;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  /* ------------- título página -------------- */
  useEffect(() => {
    document.title = 'YurForce – Consola virtual del futuro';
  }, []);

  return (
    <motion.main
      className="relative overflow-hidden font-sans text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Fondo de partículas con parallax suave */}
      <Background
        style={{
          transform: `rotateX(${parallax.y}deg) rotateY(${parallax.x}deg)`,
          transition: 'transform .2s ease-out',
        }}
      />

      {/* Aura pulsante detrás del título (solo en md+) */}
      <div
        className="
          hidden md:block
          absolute top-20 md:top-28 left-1/2 -translate-x-1/2
          w-[200px] h-[200px] md:w-[300px] md:h-[300px]
          rounded-full bg-cyan-400/30 blur-[100px]
          animate-pulse-slow pointer-events-none
        "
      />

      {/* Neblina holográfica tras el mando (solo en lg+) */}
      <div
        className="
          hidden lg:block
          absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4
          w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]
          rounded-full bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/20
          blur-[120px] animate-spin-slow -z-[1]
        "
      />

      {/* ---------- Contenido principal ---------- */}
      <section
        className="
          relative z-10 flex flex-col lg:flex-row items-center justify-center
          h-auto md:h-[calc(100vh-4rem)]
          px-4 sm:px-5 md:px-12 gap-6 lg:gap-10
        "
      >
        {/* ---------- Bloque texto centrado ---------- */}
        <motion.div
          className="
            max-w-full sm:max-w-[28rem] md:max-w-[34rem] w-full
            flex flex-col items-center lg:items-start
            text-center lg:text-left space-y-6 relative
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título + logo emergente (logo oculto en xs) */}
          <div className="relative">
            <h1
              className="
                text-[clamp(2.3rem,7vw,3.9rem)] font-extrabold
                bg-gradient-to-r from-white via-cyan-200 to-cyan-500
                bg-clip-text text-transparent leading-tight drop-shadow-sm
              "
            >
              YurForce
            </h1>

            <img
              src={logo}
              alt="Dragón YurForce"
              className="
                hidden sm:block
                absolute bottom-[-35%] left-1/2 -translate-x-1/2
                w-[30vw] max-w-[150px] min-w-[100px]
                sm:w-[42vw] sm:max-w-[200px]
                drop-shadow-[0_0_30px_rgba(0,255,255,0.55)]
                select-none pointer-events-none
              "
            />
          </div>

          <h2 className="text-[clamp(1rem,3.4vw,1.65rem)] text-cyan-100 leading-snug">
            Potencia, estilo y compatibilidad total.
            <br />
            La consola virtual del futuro.
          </h2>

          <p className="text-[clamp(0.9rem,2.6vw,1.05rem)] text-slate-200/90 leading-relaxed">
            YurForce emula PS5, Xbox Series y Nintendo Switch en una interfaz de
            nueva generación inspirada en BigBox y lista para disfrutarse con mando
            DualSense inalámbrico.
          </p>

          {/* ---------------- Botones ---------------- */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              className="
                relative overflow-hidden px-7 py-3 rounded-full font-bold
                bg-white text-black shadow-lg transition-transform
                hover:-translate-y-0.5 w-full sm:w-auto
              "
              onClick={() => {
                playClickSound();
                navigate('/about');
              }}
            >
              Más información
              <ChevronRight size={18} className="inline ml-1 -mr-2" />
            </button>

            <button
              className="
                px-7 py-3 rounded-full font-medium border border-cyan-500
                text-cyan-300 backdrop-blur hover:bg-cyan-500/15 transition-colors
                w-full sm:w-auto
              "
              onClick={() => {
                playClickSound();
                navigate('/downloads');
              }}
            >
              Obtener YurForce
            </button>
          </div>
        </motion.div>

        {/* ---------- Mando slideshow ---------- */}
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable
          glareMaxOpacity={0.22}
          className="
            w-full
            max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]
          "
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={frames[index]}
              src={frames[index]}
              alt={`mando-${index}`}
              className="
                w-full object-contain
                drop-shadow-[0_8px_45px_rgba(0,255,255,0.35)]
              "
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </Tilt>
      </section>

      {/* ---------- Keyframes embebidos ---------- */}
      <style>{`
        @keyframes spin-slow  { from {transform:rotate(0deg)} to {transform:rotate(360deg)} }
        @keyframes pulse-slow { 0%,100%{opacity:.25} 50%{opacity:.45} }
        .animate-spin-slow  { animation: spin-slow 40s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </motion.main>
  );
};

export default HomePage;
