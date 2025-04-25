import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const LegalPage: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Legal Information - YurForce';
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
        title="Legal Information"
        subtitle="Important disclaimers and legal notices"
        alignment="center"
      />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-[#151542] p-8 rounded-lg mb-12 border-l-4 border-[#ffca00]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-start mb-4">
            <AlertTriangle size={24} className="text-[#ffca00] mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
              <p className="text-[#e0e0ff]">
                This project is a fan contribution to the community without any commercial purpose. 
                YurForce is simply a visual theme for LaunchBox BigBox and does not include any games, 
                ROMs, or copyrighted content.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <SectionTitle 
            title="Copyright Notice"
            subtitle="Respect for intellectual property"
          />
          
          <div className="bg-[#151542] p-6 rounded-lg mb-8">
            <p className="text-[#e0e0ff] mb-4">
              The YurForce theme is designed for use with legitimately acquired software only. Users are 
              responsible for ensuring they have the legal right to use any games or other content they 
              load into LaunchBox/BigBox.
            </p>
            <p className="text-[#a0a0d0] mb-4">
              All game names, images, and related content shown on this website are used for illustrative 
              purposes only. All trademarks, registered trademarks, product names, and company names or 
              logos mentioned herein are the property of their respective owners.
            </p>
            <p className="text-[#a0a0d0]">
              The sample game catalog on this website features fictional listings. Any resemblance to 
              actual games is for demonstration purposes only.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <SectionTitle 
            title="Terms of Use"
            subtitle="Guidelines for using YurForce"
          />
          
          <div className="space-y-6">
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="flex items-start">
                <Info size={24} className="text-[#00e5ff] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Personal Use</h3>
                  <p className="text-[#a0a0d0]">
                    The YurForce theme is provided for personal, non-commercial use only. Users may not 
                    redistribute, sell, or monetize the theme in any way without explicit permission.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="flex items-start">
                <Info size={24} className="text-[#00e5ff] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Modifications</h3>
                  <p className="text-[#a0a0d0]">
                    Users are welcome to modify the theme for their personal use. If sharing modifications, 
                    proper credit must be given to the original YurForce creators.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#151542] p-6 rounded-lg">
              <div className="flex items-start">
                <Info size={24} className="text-[#00e5ff] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">No Warranty</h3>
                  <p className="text-[#a0a0d0]">
                    YurForce is provided "as is" without warranty of any kind, either expressed or implied, 
                    including, but not limited to, the implied warranties of merchantability and fitness for 
                    a particular purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <SectionTitle 
            title="Privacy Policy"
            subtitle="How we handle your data"
          />
          
          <div className="bg-[#151542] p-6 rounded-lg">
            <div className="flex items-start mb-6">
              <Shield size={24} className="text-[#ff00e5] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Your Privacy Matters</h3>
                <p className="text-[#a0a0d0]">
                  We take user privacy seriously. YurForce does not collect, store, or transmit any personal 
                  information or usage data.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-[#a0a0d0]">
              <p>
                <span className="font-bold text-[#e0e0ff]">No Tracking:</span> The YurForce theme does not 
                include any tracking, analytics, or telemetry features.
              </p>
              
              <p>
                <span className="font-bold text-[#e0e0ff]">Local Storage Only:</span> All theme configuration 
                and settings are stored locally on your device and are never transmitted to external servers.
              </p>
              
              <p>
                <span className="font-bold text-[#e0e0ff]">No Network Requirements:</span> YurForce functions 
                entirely offline and does not require an internet connection to operate.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LegalPage;