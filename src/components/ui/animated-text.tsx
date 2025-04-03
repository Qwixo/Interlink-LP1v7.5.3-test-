import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  textClassName?: string;
  underlineClassName?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  textClassName = "text-3xl font-bold", 
  underlineClassName = "bg-blue-500 w-24" 
}) => {
  return (
    <div className="relative inline-block">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={textClassName}
      >
        {text}
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`h-1 mt-2 ${underlineClassName}`}
      />
    </div>
  );
};
