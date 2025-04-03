import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const IsRightForYouSection = () => {
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
          Is INTERLINK the Right Fit for You?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Perfect For You Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-[#064088]">
                INTERLINK is Perfect for You If…
              </h3>
            </div>
            
            <ul className="space-y-4">
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                You dream of studying in the U.S. and need a clear, guided path.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                You want to improve your English quickly with expert teachers and small class sizes.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                You're looking for a supportive community to help you every step of the way.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                You want a TOEFL-free pathway to a U.S. university.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                You prefer personalized guidance over large, one-size-fits-all courses.
              </ListItem>
            </ul>
          </motion.div>
          
          {/* Might Not Be For You Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <XCircle className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-[#064088]">
                INTERLINK Might Not Be for You If…
              </h3>
            </div>
            
            <ul className="space-y-4">
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                You only need basic, casual English without academic goals.
              </ListItem>
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                You're looking for a fully self-taught course with no structured support.
              </ListItem>
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                You're not interested in eventually studying in the U.S. or improving your professional opportunities.
              </ListItem>
            </ul>
          </motion.div>
        </div>
        
        {/* Apply Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#dc5d33] text-white font-bold py-4 px-8 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            <span>Apply Now – See How We Can Help</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ListItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-3 flex-shrink-0">
        {icon}
      </div>
      <span className="text-gray-700">{children}</span>
    </li>
  );
};

export default IsRightForYouSection;
