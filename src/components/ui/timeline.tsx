import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  icon,
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-6 mb-8"
    >
      {/* Icon + vertical line */}
      <div className="relative flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#dc5d33] text-3xl bg-white shadow-sm">
          {icon}
        </div>
        <div className="absolute top-12 h-full w-0.5 bg-gray-200 opacity-50"></div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#064088] mb-1">{title}</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {children}
    </div>
  );
};
