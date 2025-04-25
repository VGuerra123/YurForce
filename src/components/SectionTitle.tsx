import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  withLine?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  withLine = true
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  return (
    <motion.div 
      className={`mb-8 max-w-2xl ${alignmentClasses[alignment]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {title}
      </h2>
      
      {withLine && (
        <motion.div 
          className="h-1 bg-gradient-to-r from-[#00e5ff] to-[#ff00e5] rounded-full w-24"
          initial={{ width: 0 }}
          animate={{ width: '6rem' }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      )}
      
      {subtitle && (
        <p className="mt-3 text-[#a0a0d0]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;