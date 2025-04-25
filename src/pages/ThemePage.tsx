import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Volume, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const ThemePage: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = 'YurForce Theme - Virtual Console Experience';
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
        title="The YurForce Theme"
        subtitle="A futuristic, immersive BigBox experience"
        alignment="center"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative h-64 overflow-hidden rounded-lg scanlines">
              <img 
                src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="YurForce Theme Home Screen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xl font-bold">Home Screen</p>
              </div>
            </div>
            
            <div className="relative h-64 overflow-hidden rounded-lg scanlines">
              <img 
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="YurForce Theme Game Selection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xl font-bold">Game Selection</p>
              </div>
            </div>
          </motion.div>
          
          <motion.p
            className="text-[#e0e0ff] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            YurForce is a meticulously crafted BigBox theme that transforms your gaming experience into 
            a futuristic virtual console. With its sleek design, fluid animations, and immersive sound 
            effects, YurForce creates a premium, arcade-quality interface for browsing and launching your 
            retro game collection.
          </motion.p>
        </div>
        
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <SectionTitle 
            title="Key Features"
            subtitle="What makes YurForce special"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#00e5ff] mb-4">
                <Layers size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern UI Design</h3>
              <p className="text-[#a0a0d0]">
                Clean, minimalist interface with smooth animations and transitions. Focus on your games without 
                distractions. Responsive layouts adapt to different screen sizes and aspect ratios.
              </p>
            </div>
            
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#ff00e5] mb-4">
                <Palette size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Futuristic Aesthetics</h3>
              <p className="text-[#a0a0d0]">
                Neon accents, subtle glow effects, and a sleek color palette create a sci-fi atmosphere. 
                High-contrast visuals ensure readability across different lighting conditions.
              </p>
            </div>
            
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#ffca00] mb-4">
                <Volume size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Audio Experience</h3>
              <p className="text-[#a0a0d0]">
                Custom sound effects for navigation, selection, and system events. Subtle background ambience 
                creates an immersive atmosphere without being distracting.
              </p>
            </div>
            
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="text-[#00e5ff] mb-4">
                <Zap size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Optimized</h3>
              <p className="text-[#a0a0d0]">
                Smooth 60fps animations even on modest hardware. Fast loading times and efficient resource 
                management. Compatible with standard and high-DPI displays.
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
          <SectionTitle 
            title="Color Palette"
            subtitle="The visual language of YurForce"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            <div>
              <div className="h-20 bg-[#0a0a2e] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#0a0a2e</p>
              <p className="text-center text-xs text-[#a0a0d0]">Background</p>
            </div>
            
            <div>
              <div className="h-20 bg-[#151542] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#151542</p>
              <p className="text-center text-xs text-[#a0a0d0]">Surface</p>
            </div>
            
            <div>
              <div className="h-20 bg-[#00e5ff] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#00e5ff</p>
              <p className="text-center text-xs text-[#a0a0d0]">Primary</p>
            </div>
            
            <div>
              <div className="h-20 bg-[#ff00e5] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#ff00e5</p>
              <p className="text-center text-xs text-[#a0a0d0]">Secondary</p>
            </div>
            
            <div>
              <div className="h-20 bg-[#ffca00] rounded-lg mb-2"></div>
              <p className="text-center text-sm font-mono">#ffca00</p>
              <p className="text-center text-xs text-[#a0a0d0]">Accent</p>
            </div>
          </div>
          
          <p className="text-[#a0a0d0]">
            This carefully selected color palette creates a cohesive, futuristic aesthetic that's both 
            visually striking and functional. The high-contrast design ensures readability while the 
            neon accents add visual interest and highlight important elements.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <SectionTitle 
            title="Navigation Experience"
            subtitle="Intuitive and responsive"
          />
          
          <div className="bg-[#151542] p-6 rounded-lg mb-8">
            <p className="text-[#e0e0ff] mb-4">
              YurForce features a thoughtfully designed navigation system that works seamlessly with both 
              controllers and keyboard input. The interface is organized into logical sections with clear 
              visual cues and consistent behaviors.
            </p>
            <p className="text-[#a0a0d0]">
              Games are presented in visually engaging grids and lists with smooth scrolling and intuitive 
              filtering. Selection indicators are prominent but not obtrusive, and transitions between 
              screens are fluid and satisfying.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/1034644/pexels-photo-1034644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="YurForce Navigation Grid" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="YurForce Game Details" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThemePage;