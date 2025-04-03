import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';
import { Button } from './ui/button';

const HowInterlinkHelpsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Learn English Quickly",
      description: "Use English starting on your first day of class. By using English to interact in class every day, you will make quick progress towards your English goals."
    },
    {
      icon: "🎓",
      title: "University Pathway",
      description: "Build the academic skills you need to prepare for university. Then, seamlessly transition to university without submitting English test scores."
    },
    {
      icon: "🤝",
      title: "Personalized Support and Guidance",
      description: "We'll guide you through every step of your journey with your unique goals in mind. From your INTERLINK application and visa process, to exploring your university options, we're here to help."
    },
    {
      icon: "🚀",
      title: "An Efficient Path to your goals",
      description: "Enrolling in university is a huge investment. Don’t waste your time and money starting before you’re ready. INTERLINK prepares you for language, academic, and cultural differences so you can begin confidently."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <AnimatedText 
            text="Start pursuing your goals with INTERLINK!" 
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
            INTERLINK helps you achieve your academic and career goals through personalized 
            English instruction and university preparation.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-[#064088]">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
{/*          <Button 
            variant="primary" 
            size="lg"
            className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-semibold px-8 py-3 text-lg rounded-lg shadow-md"
          >
            Be confident that you are prepared
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HowInterlinkHelpsSection;
