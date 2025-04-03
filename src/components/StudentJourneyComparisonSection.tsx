import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const StudentJourneyComparisonSection = () => {
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          How does INTERLINK help you prepare for university?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column A */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src="https://i.imgur.com/uwwcFbj.png"
                alt="Carlos before INTERLINK"
                className="w-full h-48 object-cover rounded-lg max-w-xs"
              />
            </div>

            <div className="flex items-center mb-6">
<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
  <X className="text-red-600 w-6 h-6" />
</div>

              <h3 className="text-2xl font-bold text-[#064088] leading-snug">
                Carlos used free <span className="text-[#c24e2b] underline">apps</span>
                <br />
                <span className="text-lg font-medium text-gray-700">
                  to practice English and achieved the minimum test score for university admission
                </span>
              </h3>
            </div>

            {/* Bullet Points */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Academic Skills</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Struggles with academic writing and research requirements</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Participating in Class</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Too nervous to speak up or ask questions when confused</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Understanding Professors & Assignments</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Misses key information in lectures and assignment instructions</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Learning Strategies</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Lacks effective study habits, studying long hours with no results</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Graduation Rate</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">At risk of dropping out or extending degree timeline</p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-bold text-red-700 text-center">
                Overwhelmed, unprepared, failed classes and at risk of dropping out
              </p>
            </div>
          </motion.div>

          {/* Column B */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src="https://i.imgur.com/68eMW06.png"
                alt="Gabriela after INTERLINK"
                className="w-full h-48 object-cover rounded-lg max-w-xs"
              />
            </div>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#064088] leading-snug">
                Gabriela attended <span className="text-green-700 underline">INTERLINK</span>
                <br />
                <span className="text-lg font-medium text-gray-700">
                  to learn English and prepare for university
                </span>
              </h3>
            </div>

            {/* Bullet Points */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Academic Skills</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Learns academic writing, research, and presentation skills</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Participating in Class</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Confidently asks questions and engages in class discussions</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Understanding Professors & Assignments</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Understands lectures and assignment requirements clearly</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Learning Strategies</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Has effective study habits and time management skills</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Graduation Rate</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">High probability of completing degree on time</p>
              </div>
            </div>

            <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-bold text-green-700 text-center">
                Confident, prepared for university, succeeding in classes and likely to graduate
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackApplicationClick("Student Journey Comparison")}
          >
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
            >
              Apply Now & Get Started
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentJourneyComparisonSection;
