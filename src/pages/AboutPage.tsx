// src/pages/AboutPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Acerca de LaunchBox y BigBox - YurForce';
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
        title="¿Qué es LaunchBox y BigBox?"
        subtitle="Una plataforma completa para gestionar y jugar tu colección retro"
        alignment="center"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#00e5ff]">LaunchBox</h3>
            <p className="text-[#e0e5ff] mb-4">
              LaunchBox es un gestor de biblioteca de juegos sofisticado con una interfaz limpia y fácil de usar. 
              Comenzó como un frontend para DOSBox, pero evolucionó en una solución integral para gestionar juegos de múltiples plataformas.
            </p>
            <p className="text-[#a0a0d0] mb-4">
              Con LaunchBox puedes importar tus juegos, descargar metadatos e imágenes automáticamente y lanzarlos con sus emuladores correspondientes desde una sola aplicación.
            </p>
            <div className="bg-[#151542] p-4 rounded-lg">
              <h4 className="font-bold mb-2">Características clave:</h4>
              <ul className="list-disc pl-5 text-[#a0a0d0] space-y-1">
                <li>Soporte para múltiples plataformas</li>
                <li>Descarga automática de metadatos e imágenes</li>
                <li>Interfaz personalizable</li>
                <li>Filtrado y ordenación potentes</li>
                <li>Compatible con varios emuladores</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#ff00e5]">BigBox</h3>
            <p className="text-[#e0e5ff] mb-4">
              BigBox es el modo de pantalla completa de LaunchBox, diseñado para setups de home theater y arcades. 
              Ofrece una experiencia tipo consola para TV y mandos.
            </p>
            <p className="text-[#a0a0d0] mb-4">
              Con temas personalizables, BigBox convierte tu PC en una consola virtual, permitiéndote navegar y lanzar juegos desde el sofá.
            </p>
            <div className="bg-[#151542] p-4 rounded-lg">
              <h4 className="font-bold mb-2">Características clave:</h4>
              <ul className="list-disc pl-5 text-[#a0a0d0] space-y-1">
                <li>Navegación con mando</li>
                <li>Temas y diseños personalizables</li>
                <li>Experiencia de pantalla completa</li>
                <li>Animaciones y transiciones suaves</li>
                <li>Capacidad de crear temas</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <SectionTitle
            title="Temas personalizados"
            subtitle="Exprésate con interfaces únicas"
          />

          <div className="bg-[#151542] p-6 rounded-lg mb-8">
            <p className="text-[#e0e5ff] mb-4">
              El sistema de theming de BigBox permite personalizar casi todo: diseños, animaciones, sonidos y más.
            </p>
            <p className="text-[#a0a0d0]">
              Temas como YurForce aprovechan esta flexibilidad para crear experiencias inmersivas y únicas para tu colección retro.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-[#00e5ff]/20 to-[#ff00e5]/20 p-6 rounded-lg border border-[#00e5ff]/30">
              <p className="text-center text-[#e0e0ff] font-bold">
                ¿Listo para transformar tu experiencia retro con YurForce?
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
