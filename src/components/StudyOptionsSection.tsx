import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Check, Laptop, Wifi, Award } from 'lucide-react';

const StudyOptionsSection = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#064088] mb-4">
            Study Options – Choose the Best Fit for You
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you prefer the full U.S. campus experience or the flexibility of online learning, INTERLINK has a program for you.
          </p>
        </motion.div>
        
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Card 1: In-Person Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Blue Background */}
            <div className="bg-[#064088] p-6 flex items-center">
              <MapPin className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">In-Person Program</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Location:</span>
                    <span className="ml-2 text-gray-700">On Campus at University of North Carolina Greensboro<br />Greensboro, North Carolina, USA</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">10 weeks per level (two 5-week terms)</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 per term</span>
                    <div className="text-sm text-gray-600 mt-1">Note: F-1 visa students must study full-time.</div>
                  </div>
                </div>
              </div>


{/* Who Is This Best For? */}
<div className="mb-8">
  <h4 className="text-lg font-semibold text-gray-800 mb-4">
    <Users className="inline-block w-5 h-5 mr-2 text-[#064088]" />
    Who Is This Best For?
  </h4>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Students who want to <span className="font-semibold">fully immerse</span> in American university life</span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Those planning to transition to a <span className="font-semibold">U.S. college/university</span></span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Students who learn best through <span className="font-semibold">face-to-face interactions</span></span>
    </li>
  </ul>
</div>

							
              {/* Benefits Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Award className="inline-block w-5 h-5 mr-2 text-[#064088]" />
                  Benefits:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Small, interactive classes (8–12 students) for personalized learning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Full access to university facilities (libraries, sports, clubs)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Cultural immersion – live, study, and interact with students from the USA and around the world</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Admission to U.S. universities without TOEFL/IELTS upon program completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2: Online Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Orange Background */}
            <div className="bg-[#dc5d33] p-6 flex items-center">
              <Wifi className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Online Program</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">10 weeks per level (two 5-week terms)</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Full-time Tuition:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 per term</span>
                    <div className="text-sm text-gray-600 mt-1">(2 classes per day)</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Part-time Tuition:</span>
                    <span className="ml-2 text-gray-700 font-bold">$825 per term</span>
                    <div className="text-sm text-gray-600 mt-1">(1 class per day)</div>
                  </div>
                </div>
              </div>
              
              {/* Curriculum */}
{/*              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Users className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
                  Curriculum:
                </h4>
                <p className="text-gray-700">
                  Same interactive curriculum as the in-person program
                </p>
              </div>
*/}


{/* Who Is This Best For? */}
<div className="mb-8">
  <h4 className="text-lg font-semibold text-gray-800 mb-4">
    <Users className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
    Who Is This Best For?
  </h4>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Students who need a <span className="font-semibold">flexible schedule</span> and prefer to study from home</span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Those who want to <span className="font-semibold">prepare for U.S. study</span> before moving abroad</span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Busy professionals looking to <span className="font-semibold">improve their English without travel</span></span>
    </li>
  </ul>
</div>




							
              {/* Benefits Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Award className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
                  Benefits:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Live, interactive lessons with expert instructors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Same curriculum as the in-person program</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Learn from anywhere in the world</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Option to start your English studies online while applying for your visa</span>
                  </li>
                </ul>
              </div>
              
              {/* Flexibility */}
{/*              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Check className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Flexibility:
                </h4>
                <p className="text-gray-700">
                  Flexible pace – choose full-time (2 classes/day) or part-time (1 class/day), with live, scheduled lessons.
                </p>
              </div>*/}
            </div>
          </motion.div>
        </div>
        
        {/* TIP and Inclusive Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <p className="text-lg font-semibold text-[#dc5d33] mb-2">
            TIP: Start online while applying for your visa — save time and money.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Whether you're abroad or facing delays with immigration, you can start your English studies online and join us in person when you're ready.
          </p>
        </motion.div>

        {/* Apply Now Button */}
        <div className="flex justify-center mt-10">
<a
  href="https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackApplicationClick("Study Options Section")}
  // 🔍 Opens app form in new tab and enables future tracking
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

export default StudyOptionsSection;
