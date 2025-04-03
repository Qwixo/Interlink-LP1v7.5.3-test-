import React from 'react';
import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';

const SpeakingEnglishPaysOffSection = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-16"
        >
          Speaking English Pays Off – Here's the Proof
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Bar Chart (Left Column) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Chart Container */}
              <div className="flex justify-center items-end h-72 mb-8 gap-16">
                {/* Non-English Speakers Bar */}
                <div className="flex flex-col items-center">
                  {/* Value label */}
                  <div className="mb-4 text-center">
                    <span className="text-xl font-bold text-gray-700">~500 USD</span>
                    <span className="text-sm text-gray-600 block">per month</span>
                  </div>
                  
                  {/* Bar */}
                  <div className="relative">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: '120px' }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="w-24 md:w-28 bg-gray-400 rounded-t-lg shadow-md"
                    />
                  </div>
                  
                  {/* Label */}
                  <p className="text-center font-medium text-gray-700 mt-4">Non-English Speaker in Vietnam</p>
                </div>
                
                {/* English Speakers Bar */}
                <div className="flex flex-col items-center">
                  {/* Salary Range - Only showing the increase info */}
                  <div className="mb-4 text-center">
                    {/* Removed "$800 - $1,200" text */}
                    <span className="text-sm text-gray-600 block">per month</span>
                  </div>
                  
                  {/* Increase Label - Moved outside the bar */}
                  <div className="absolute -top-12 right-0">
                    <div className="bg-[#dc5d33] text-white px-4 py-2 rounded-lg font-bold shadow-md flex flex-col items-center">
                      <span>↑ 70% Increase</span>
                      {/* Added spacing between texts */}
                      <span className="text-xs mt-1">(based on industry)</span>
                    </div>
                  </div>
                  
                  {/* Bar */}
                  <div className="relative">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: '204px' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="w-24 md:w-28 bg-[#dc5d33] rounded-t-lg shadow-md"
                    />
                  </div>
                  
                  {/* Label */}
                  <p className="text-center font-medium text-[#dc5d33] mt-4">English Speaker in Vietnam</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content (Right Column) */}
          <div className="md:w-1/2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-[#064088] mb-6"
            >
              Your English Skills = More Money in Your Pocket
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-700 mb-6"
            >
              In Vietnam, English skills can increase your salary by <span className="font-bold">70%</span>. The better your English, the more career doors open for you. It's not just about speaking—it's about earning.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-gray-600"
            >
              According to the Vietnam Salary Guide 2023 by Robert Walters, professionals in Vietnam who speak English earn approximately 70% more than those who don't.
            </motion.p>
          </div>
        </div>
        
        {/* Key Takeaway Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg shadow-sm border border-[#dc5d33]"
        >
          <div className="flex items-start gap-4">
            <BarChart className="w-6 h-6 text-[#064088] flex-shrink-0 mt-1" />
            <p className="text-gray-700">
              <span className="font-bold">Want even more opportunity?</span> The U.S. Bureau of Labor Statistics reports that the median salary for full-time workers in the U.S. is $4,500 per month. If you improve your English and work internationally, your earning potential skyrockets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakingEnglishPaysOffSection;
