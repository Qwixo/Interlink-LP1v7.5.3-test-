import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';

const YourJourneySection = () => {
  const steps = [
    {
      number: 1,
      title: "Decide You Want To Begin",
      description: "Committing to a goal is the most difficult part of doing anything really. Once you decide this is what you want, everything will get easier.",
      imageAlt: "Happy students together"
    },
    {
      number: 2,
      title: "Improve Your English & Confidence",
      description: "Gain real skills, not just test scores—so you're ready for university success.",
      imageAlt: "Students in class, presenting, engaging"
    },
    {
      number: 3,
      title: "Experience Life in the U.S.",
      description: "Live on campus, make friends, and enjoy student life.",
      imageAlt: "Students on campus, in dorms, socializing"
    },
    {
      number: 4,
      title: "Your Better Future Awaits!",
      description: "Graduate from Interlink, enter university without TOEFL, and start your degree!",
      imageAlt: "Student in cap & gown, holding books"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <AnimatedText 
            text="Your Dream Life in the U.S. Starts Here!"
            textClassName="text-3xl md:text-4xl font-bold text-[#064088]"
            underlineClassName="text-[#dc5d33] w-64 md:w-96 mx-auto"
          />
          
          {/* Short Motivational Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto"
          >
            Studying in the U.S. isn't just about learning English—it's about new experiences, 
            friendships, and opportunities. Imagine yourself walking on a university campus, 
            improving your English, and preparing for your future career.
          </motion.p>
        </div>
        
        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step Number - Changed color to #dc5d33 */}
              <div className="w-12 h-12 rounded-full bg-[#dc5d33] text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">{step.imageAlt}</span>
              </div>
              
              {/* Step Title - Changed color to #dc5d33 */}
              <h3 className="text-xl font-bold text-[#dc5d33] mb-2">{step.title}</h3>
              
              {/* Step Description */}
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourJourneySection;
