import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const AboutPage: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = 'About LaunchBox & BigBox - YurForce';
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
        title="What is LaunchBox & BigBox?"
        subtitle="A comprehensive platform for managing and playing your retro game collection"
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
            <p className="text-[#e0e0ff] mb-4">
              LaunchBox is a sophisticated game library manager that offers a clean, user-friendly interface 
              to organize your entire gaming collection. It started as a frontend for DOSBox but evolved into 
              a comprehensive solution for managing games across multiple platforms.
            </p>
            <p className="text-[#a0a0d0] mb-4">
              With LaunchBox, you can import games from various platforms, download metadata and artwork, 
              and launch games with their appropriate emulators, all from a single, unified interface.
            </p>
            <div className="bg-[#151542] p-4 rounded-lg">
              <h4 className="font-bold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 text-[#a0a0d0] space-y-1">
                <li>Extensive platform support</li>
                <li>Automatic metadata and artwork downloading</li>
                <li>Customizable interface</li>
                <li>Powerful filtering and sorting options</li>
                <li>Multi-emulator support</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#ff00e5]">BigBox</h3>
            <p className="text-[#e0e0ff] mb-4">
              BigBox is LaunchBox's full-screen mode, designed specifically for home theater setups and 
              arcade cabinets. It provides a TV and controller-friendly interface, perfect for a 
              console-like experience on your PC.
            </p>
            <p className="text-[#a0a0d0] mb-4">
              With its customizable themes, BigBox transforms your gaming PC into a virtual console, 
              offering a visually stunning way to browse and launch your game collection from the comfort 
              of your couch.
            </p>
            <div className="bg-[#151542] p-4 rounded-lg">
              <h4 className="font-bold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 text-[#a0a0d0] space-y-1">
                <li>Controller-friendly navigation</li>
                <li>Customizable themes and layouts</li>
                <li>Beautiful, full-screen experience</li>
                <li>Smooth animations and transitions</li>
                <li>Theme creation capabilities</li>
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
            title="Custom Themes"
            subtitle="Express your style with personalized interfaces"
          />
          
          <div className="bg-[#151542] p-6 rounded-lg mb-8">
            <p className="text-[#e0e0ff] mb-4">
              One of BigBox's most powerful features is its theming system. Theme creators can customize 
              virtually every aspect of the interface, from layouts and animations to sounds and navigation.
            </p>
            <p className="text-[#a0a0d0]">
              Themes like YurForce take advantage of this flexibility to create unique, immersive experiences 
              that transform how you interact with your game collection. With custom themes, BigBox becomes more 
              than just a launcher—it becomes an extension of your gaming personality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/4062221/pexels-photo-4062221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="BigBox Theme Example 1" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.pexels.com/photos/4077269/pexels-photo-4077269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="BigBox Theme Example 2" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <SectionTitle 
            title="Community"
            subtitle="Join a passionate group of retro gaming enthusiasts"
          />
          
          <p className="text-[#e0e0ff] mb-4">
            LaunchBox and BigBox are supported by a vibrant, active community of retro gaming enthusiasts 
            and theme creators. Forums, Discord channels, and social media groups provide spaces for users 
            to share their setups, ask questions, and showcase their custom themes.
          </p>
          
          <p className="text-[#a0a0d0] mb-8">
            The YurForce theme is a contribution to this passionate community, created by fans for fans, 
            to enhance the retro gaming experience for everyone.
          </p>
          
          <div className="bg-gradient-to-r from-[#00e5ff]/20 to-[#ff00e5]/20 p-6 rounded-lg border border-[#00e5ff]/30">
            <p className="text-center text-[#e0e0ff] font-bold">
              Ready to transform your retro gaming experience with YurForce?
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;