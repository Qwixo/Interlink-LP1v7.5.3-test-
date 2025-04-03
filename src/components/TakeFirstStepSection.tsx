import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';

const TakeFirstStepSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <AnimatedText 
            text="Take the First Step" 
            textClassName="text-5xl md:text-6xl lg:text-7xl font-bold text-[#064088] mb-6"
            underlineClassName="text-[#064088]"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={1.5}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TakeFirstStepSection;
