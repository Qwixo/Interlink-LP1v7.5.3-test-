import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-[#064088]">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#064088] transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-4 text-gray-700"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [showContactInfo, setShowContactInfo] = useState(false); // ✅ Correct placement

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Got Questions? We've Got Answers!
          </h2>
          <p className="text-lg text-gray-700">
            Here are the most common questions students ask before applying to INTERLINK. Click to expand each question for details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10"
        >
          <FAQItem
            question="How much does it cost?"
            answer={
              <p>
                INTERLINK tuition and fees are $1,650 per term for full-time study and $825 per term for part-time study.
              </p>
            }
          />

          <FAQItem
            question="What's the program duration?"
            answer={
              <p>
                Each level of INTERLINK's 6-level curriculum consists of two 5-week modules (10 weeks total). Students typically complete the program in 2 to 15 months, depending on their starting level.
              </p>
            }
          />

          <FAQItem
            question="What does the class schedule look like?"
            answer={
              <div>
                <p className="mb-2">Classes run Monday to Friday, 2 hours per day.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full-time: 2 courses, 4 hours per day</li>
                  <li>Part-time: 1 course, 2 hours per day</li>
                </ul>
              </div>
            }
          />

          <FAQItem
            question="Do I need a student visa?"
            answer={
              <div>
                <p className="mb-2">
                  <strong>For U.S. study:</strong> Yes, full-time students will need an F-1 student visa. INTERLINK provides all required documents for the visa application process.
                </p>
                <p>
                  <strong>For online study:</strong> No visa is required.
                </p>
              </div>
            }
          />

          <FAQItem
            question="Do you help with housing?"
            answer={
              <div>
                <p className="mb-2">
                  <strong>Yes!</strong> On-campus housing (dormitories) is available but must be confirmed at least 15 weeks before the program starts. A $100 housing fee applies for assistance.
                </p>
                <p>
                  <strong>Note:</strong> INTERLINK does not provide off-campus (apartment) housing assistance.
                </p>
              </div>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowContactInfo(true)}
            className="bg-[#064088] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#053067] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Still Have Questions? Ask Ana!</span>
          </motion.button>

          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-white border border-gray-200 rounded-lg shadow-md p-6 text-left max-w-md w-full"
            >
              <h4 className="text-xl font-semibold text-[#064088] mb-2">📬 Contact Ana</h4>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong>{' '}
                <a href="mailto:admissions@interlink.edu" className="text-blue-600 underline">
                  admissions@interlink.edu
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/17203912030?text=Hi%2C+I%27m+interested+in+learning+English"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 (720) 391-2030
                </a>
              </p>
              <button
                onClick={() => setShowContactInfo(false)}
                className="text-sm text-gray-500 underline hover:text-gray-700"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
