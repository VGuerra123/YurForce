import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, FileCode, TerminalSquare } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useAudio } from '../hooks/useAudio';

const DownloadsPage: React.FC = () => {
  const { playClickSound, playSuccessSound } = useAudio();
  
  // Update page title
  useEffect(() => {
    document.title = 'Downloads & Tutorials - YurForce';
  }, []);
  
  const handleDownload = () => {
    playSuccessSound();
    // In a real app, this would trigger an actual download
    alert('Download started! (Note: This is a simulation, no actual file will be downloaded)');
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
        title="Downloads & Tutorials"
        subtitle="Everything you need to get started with YurForce"
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
          
          <h3 className="text-2xl font-bold mb-4 gradient-text">YurForce Theme Package</h3>
          
          <p className="text-[#e0e0ff] mb-6">
            Download the complete YurForce theme package for LaunchBox BigBox. This includes all assets, 
            configuration files, and documentation needed to transform your BigBox experience.
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
              <span>Download YurForce v1.5.2</span>
            </button>
            
            <span className="text-[#a0a0d0]">Size: 154 MB</span>
          </div>
          
          <div className="p-4 bg-[#0a0a2e] rounded border border-[#00e5ff]/30">
            <h4 className="font-semibold mb-2">Installation Requirements:</h4>
            <ul className="list-disc pl-5 text-[#a0a0d0] space-y-1">
              <li>LaunchBox Premium with BigBox support</li>
              <li>Windows 10/11 (64-bit recommended)</li>
              <li>DirectX 11 compatible graphics card</li>
              <li>4GB RAM minimum (8GB recommended)</li>
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
            title="Installation Tutorial"
            subtitle="Step-by-step guide to installing YurForce"
          />
          
          <div className="bg-[#151542] rounded-lg overflow-hidden mb-8">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Installation Tutorial Cover"
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
              <h3 className="text-xl font-bold mb-2">YurForce Installation Guide</h3>
              <p className="text-[#a0a0d0]">
                This comprehensive video tutorial walks you through the entire installation process, 
                from downloading the theme to configuring it for optimal performance.
              </p>
            </div>
          </div>
          
          <div className="bg-[#151542] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Installation Steps:</h3>
            
            <ol className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-bold mb-1">Download & Extract</h4>
                  <p className="text-[#a0a0d0]">
                    Download the YurForce package and extract it to a temporary location on your computer.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-bold mb-1">Open LaunchBox</h4>
                  <p className="text-[#a0a0d0]">
                    Launch LaunchBox and navigate to the Settings menu by clicking the gear icon in the top right.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-bold mb-1">Navigate to Themes</h4>
                  <p className="text-[#a0a0d0]">
                    Go to the "Themes" section in the settings menu and click on "Import Theme."
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-bold mb-1">Select Theme Package</h4>
                  <p className="text-[#a0a0d0]">
                    Browse to the location where you extracted the YurForce files and select the "YurForce.lbtheme" file.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  5
                </div>
                <div>
                  <h4 className="font-bold mb-1">Apply Theme</h4>
                  <p className="text-[#a0a0d0]">
                    After importing, select YurForce from the themes list and click "Apply Theme."
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#00e5ff] text-[#0a0a2e] rounded-full font-bold mr-4">
                  6
                </div>
                <div>
                  <h4 className="font-bold mb-1">Launch BigBox</h4>
                  <p className="text-[#a0a0d0]">
                    Start BigBox to experience your new YurForce theme in action!
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
            title="Additional Resources"
            subtitle="Customize and extend your YurForce experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#ff00e5] mb-4">
                <FileCode size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customization Guide</h3>
              <p className="text-[#a0a0d0] mb-4">
                Learn how to customize YurForce colors, layouts, and sounds to match your preferences.
              </p>
              <button 
                className="text-[#ff00e5] hover:text-[#e0e0ff] transition-colors"
                onClick={playClickSound}
              >
                Download Guide (PDF)
              </button>
            </div>
            
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#00e5ff] mb-4">
                <TerminalSquare size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Configuration</h3>
              <p className="text-[#a0a0d0] mb-4">
                Dive into advanced settings and optimizations for power users and theme developers.
              </p>
              <button 
                className="text-[#00e5ff] hover:text-[#e0e0ff] transition-colors"
                onClick={playClickSound}
              >
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DownloadsPage;