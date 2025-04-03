import React from 'react';
import { motion } from 'framer-motion';
import { Map, FileText, DollarSign, Rocket, HelpCircle } from 'lucide-react';

const IsRightForYouSectionLanding = () => {
  const cards = [
    {
      icon: <Map className="w-10 h-10 text-[#064088] mb-4" />,
      title: "You're dreaming of the U.S. but need clear, simple steps to get started.",
      description: "You have the dream but need clear steps to make it happen."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#064088] mb-4" />,
      title: "You want to plan your budget without guesswork.",
      description: "We'll provide a timeline and expenses that many people overlook."
    },
    {
      icon: <FileText className="w-10 h-10 text-[#064088] mb-4" />,
      title: "You're unsure about the visa process or school requirements.",
      description: "Don't stress about mastering English before you apply. We'll show you how you can improve English while you study in the US."
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Worried about your English?",
      description: "Don't worry about your language skills. We'll show you how to succeed."
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#064088] mb-4" />,
      title: "You want a life-changing experience that opens doors to global careers.",
      description: "This could be the best decision of your life. Let's make it real!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-5xl font-bold text-center text-[#064088] mb-12" 
        > 
          Why do you need this guide?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(0, 4).map((card, index) => (
            <CardItem key={index} card={card} index={index} />
          ))}
        </div>
        
        {/* The 5th card spans full width */}
        <div className="mt-6 relative">
          <CardItem card={cards[4]} index={4} fullWidth highlightText />
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
  fullWidth?: boolean;
  highlightText?: boolean;
}

const CardItem = ({ card, index, fullWidth = false, highlightText = false }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
        fullWidth ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
      } ${highlightText ? 'border-2 border-[#064088]' : ''}`}
    >
      <div className="flex flex-col">
        {card.icon}
        <h3 className="text-xl font-bold text-[#064088] mb-2">{card.title}</h3>
        {highlightText ? (
          <p className="text-lg font-medium text-[#dc5d33]">
            This could be the best decision of your life. Let's make it real!
          </p>
        ) : (
          <p className="text-gray-700">{card.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default IsRightForYouSectionLanding;
