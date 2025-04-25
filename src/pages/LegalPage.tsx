// src/pages/LegalPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const LegalPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Aviso legal - YurForce';
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
        title="Información legal"
        subtitle="Descargos de responsabilidad y avisos importantes"
        alignment="center"
      />

      {/* Disclaimer */}
      <motion.div
        className="bg-[#151542] p-8 rounded-lg mb-12 border-l-4 border-[#ffca00]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-start mb-4">
          <AlertTriangle size={24} className="text-[#ffca00] mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-2">Descargo de responsabilidad</h3>
            <p className="text-[#e0e0ff]">
              Este proyecto es una contribución de fans sin propósito comercial. YurForce es un tema visual para LaunchBox BigBox y no incluye juegos ni contenido con copyright.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <SectionTitle title="Aviso de copyright" subtitle="Respeto a la propiedad intelectual" />
        <div className="bg-[#151542] p-6 rounded-lg mb-8">
          <p className="text-[#e0e0ff] mb-4">
            Este tema se debe usar solo con software adquirido legalmente. El usuario es responsable de tener los derechos para usar cualquier juego o contenido.
          </p>
          <p className="text-[#a0a0d0] mb-4">
            Nombres de juegos, imágenes o marcas mostradas son solo ilustrativas. Todas las marcas son propiedad de sus dueños.
          </p>
          <p className="text-[#a0a0d0]">
            El catálogo de ejemplo es ficcional; cualquier parecido con la realidad es casual.
          </p>
        </div>
      </motion.div>

      {/* Terms of Use */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <SectionTitle title="Términos de uso" subtitle="Guías para usar YurForce" />
        <div className="space-y-6">
          <div className="bg-[#151542] p-6 rounded-lg">
            <div className="flex items-start">
              <Info size={24} className="text-[#00e5ff] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Uso personal</h3>
                <p className="text-[#a0a0d0]">
                  Este tema es para uso personal y no comercial. No puede redistribuirse o venderse sin permiso.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#151542] p-6 rounded-lg">
            <div className="flex items-start">
              <Info size={24} className="text-[#00e5ff] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Modificaciones</h3>
                <p className="text-[#a0a0d0]">
                  Puedes modificar el tema para uso personal. Si compartes cambios, da crédito a los creadores originales.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#151542] p-6 rounded-lg">
            <div className="flex items-start">
              <Info size={24} className="text-[#00e5ff] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Sin garantía</h3>
                <p className="text-[#a0a0d0]">
                  YurForce se ofrece "tal cual", sin garantías, expresas o implícitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Privacy Policy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <SectionTitle title="Política de privacidad" subtitle="Cómo manejamos tus datos" />
        <div className="bg-[#151542] p-6 rounded-lg">
          <div className="flex items-start mb-6">
            <Shield size={24} className="text-[#ff00e5] mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Tu privacidad importa</h3>
              <p className="text-[#a0a0d0]">
                No recopilamos, almacenamos ni transmitimos datos personales o de uso.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-[#a0a0d0]">
            <p>
              <span className="font-bold text-[#e0e0ff]">Sin seguimiento:</span> No hay analytics ni telemetría.
            </p>
            <p>
              <span className="font-bold text-[#e0e0ff]">Solo almacenamiento local:</span> La configuración se guarda en tu dispositivo.
            </p>
            <p>
              <span className="font-bold text-[#e0e0ff]">Sin conexión necesaria:</span> Funciona completamente offline.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LegalPage;
