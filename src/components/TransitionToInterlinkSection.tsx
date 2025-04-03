import React from 'react';
import { motion } from 'framer-motion';

const TransitionToInterlinkSection = () => {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#064088] mb-6"
        >
          So What Happens Next?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
        >
          You’ve seen the 5 steps. Now here’s how INTERLINK makes everything easy — from visa help to getting started in the U.S. or online.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-600 max-w-2xl mx-auto"
        >
          Whether you're applying for in-person or online study, we’ll guide you through every step — so you don’t have to figure it out alone.
        </motion.p>
      </div>
    </section>
  );
};

export default TransitionToInterlinkSection;
