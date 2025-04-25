// src/pages/DownloadsPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, FileCode, TerminalSquare } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useAudio } from '../hooks/useAudio';

const DownloadsPage: React.FC = () => {
  const { playClickSound, playSuccessSound } = useAudio();

  useEffect(() => {
    document.title = 'Descargas y tutoriales - YurForce';
  }, []);

  const handleDownload = () => {
    playSuccessSound();
    alert('¡Descarga iniciada! (Nota: esto es una simulación, no se descargará ningún archivo)');
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle
        title="Descargas y tutoriales"
        subtitle="Todo lo que necesitas para empezar con YurForce"
        alignment="center"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-[#151542] p-8 rounded-lg mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00e5ff] to-[#ff00e5] opacity-30 blur-xl"></div>

          <h3 className="text-2xl font-bold mb-4 gradient-text">Paquete de YurForce</h3>

          <p className="text-[#e0e0ff] mb-6">
            Descarga el paquete completo de YurForce para LaunchBox BigBox. Incluye todos los activos, archivos de configuración y documentación.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <button
              className="console-button flex items-center w-full sm:w-auto justify-center"
              onClick={() => {
                playClickSound();
                handleDownload();
              }}
            >
              <Download size={18} className="mr-2" />
              <span>Descargar YurForce v1.5.2</span>
            </button>

            <span className="text-[#a0a0d0]">Tamaño: 154 MB</span>
          </div>

          <div className="p-4 bg-[#0a0a2e] rounded border border-[#00e5ff]/30">
            <h4 className="font-semibold mb-2">Requisitos de instalación:</h4>
            <ul className="list-disc pl-5 text-[#a0a0d0] space-y-1">
              <li>LaunchBox Premium con soporte BigBox</li>
              <li>Windows 10/11 (64 bits recomendado)</li>
              <li>Tarjeta gráfica compatible con DirectX 11</li>
              <li>4 GB de RAM mínimo (8 GB recomendado)</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <SectionTitle
            title="Tutorial de instalación"
            subtitle="Guía paso a paso para instalar YurForce"
          />

          <div className="bg-[#151542] rounded-lg overflow-hidden mb-8">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg"
                alt="Tutorial de instalación"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] to-transparent flex items-center justify-center">
                <button
                  className="w-16 h-16 flex items-center justify-center bg-[#00e5ff]/20 hover:bg-[#00e5ff]/40 rounded-full border-2 border-[#00e5ff] transition-colors"
                  onClick={playClickSound}
                >
                  <Play size={32} className="text-white ml-1" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Guía de instalación de YurForce</h3>
              <p className="text-[#a0a0d0]">
                Este tutorial en video te guía por todo el proceso de instalación, desde la descarga hasta la configuración.
              </p>
            </div>
          </div>

          <div className="bg-[#151542] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Pasos de instalación:</h3>

            <ol className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-bold mb-1">Descargar y extraer</h4>
                  <p className="text-[#a0a0d0]">
                    Descarga el paquete YurForce y extráelo en tu equipo.
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-bold mb-1">Abrir LaunchBox</h4>
                  <p className="text-[#a0a0d0]">
                    Inicia LaunchBox y ve al menú de configuración (icono de engranaje).
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-bold mb-1">Ir a Temas</h4>
                  <p className="text-[#a0a0d0]">
                    En la sección “Temas”, haz clic en “Importar tema”.
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-bold mb-1">Seleccionar paquete de tema</h4>
                  <p className="text-[#a0a0d0]">
                    Busca el archivo “YurForce.lbtheme” en la carpeta extraída.
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  5
                </div>
                <div>
                  <h4 className="font-bold mb-1">Aplicar tema</h4>
                  <p className="text-[#a0a0d0]">
                    Selecciona YurForce en la lista y haz clic en “Aplicar tema”.
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  6
                </div>
                <div>
                  <h4 className="font-bold mb-1">Iniciar BigBox</h4>
                  <p className="text-[#a0a0d0]">
                    ¡Abre BigBox y disfruta de tu nuevo tema YurForce!
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <SectionTitle
            title="Recursos adicionales"
            subtitle="Personaliza y amplía tu experiencia YurForce"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#ff00e5] mb-4">
                <FileCode size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Guía de personalización</h3>
              <p className="text-[#a0a0d0] mb-4">
                Aprende a cambiar colores, diseños y sonidos a tu gusto.
              </p>
              <button
                className="text-[#ff00e5] hover:text-[#00e5ff] transition-colors"
                onClick={playClickSound}
              >
                Descargar guía (PDF)
              </button>
            </div>

            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#00e5ff] mb-4">
                <TerminalSquare size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Configuración avanzada</h3>
              <p className="text-[#a0a0d0] mb-4">
                Profundiza en ajustes y optimizaciones para usuarios avanzados.
              </p>
              <button
                className="text-[#00e5ff] hover:text-[#e0e0ff] transition-colors"
                onClick={playClickSound}
              >
                Ver documentación
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
);
}
export default DownloadsPage;