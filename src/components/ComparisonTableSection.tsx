import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

// Mobile accordion component for responsive design
const MobileAccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button 
        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
};

const ComparisonTableSection = () => {
  // State for mobile accordion
  const [openItem, setOpenItem] = useState(null);
  
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Comparison data
  const comparisonData = [
    {
      feature: "Speaking & Fluency",
      interlink: "Daily real-world practice",
      freePrograms: "No real interaction",
      largeCompetitors: "Some practice, but limited"
    },
    {
      feature: "University Readiness",
      interlink: "Direct admission to university, equipped with the critical thinking and academic skills you need",
      freePrograms: "No university or study skills",
      largeCompetitors: "Direct admission not guaranteed, no university preparation"
    },
    {
      feature: "Personalized Support",
      interlink: "Top quality, experienced American instructors provide personalized feedback",
      freePrograms: "No teachers, no feedback",
      largeCompetitors: "Large classes, generic courses, inexperienced instructors"
    },
    {
      feature: "Cost & Value",
      interlink: "Affordable, best results",
      freePrograms: "Free, but slow & ineffective",
      largeCompetitors: "$5,000+ per term, overpriced"
    },
    {
      feature: "Engaging Classes",
      interlink: "Engaging projects that are relevant to your goals and interests. No textbooks, no lectures, no exams.",
      freePrograms: "No classes, self-guided lessons and assessment",
      largeCompetitors: "Boring lessons, lectures, textbooks, and studying for exams."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12"
        >
          Why INTERLINK? See the Difference at a Glance
        </motion.h2>
        
        {/* Desktop Comparison Table - Hidden on mobile */}
        <div className="hidden md:block overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <span className="text-lg font-bold text-gray-700">Feature</span>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#064088]">INTERLINK</span>
                    <Check className="ml-2 text-green-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Free Programs</span>
                    <X className="ml-2 text-red-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Large Competitors</span>
                    <DollarSign className="ml-2 text-yellow-500 w-5 h-5" />
                  </div>
                </th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <span className="font-semibold text-gray-800">{row.feature}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.interlink}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.freePrograms}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.largeCompetitors}</span>
                    </div>
                  </td>
                </tr>
              ))}
              
              {/* Conclusion Row */}
              <tr className="border-t-2 border-gray-300 bg-gray-50">
                <td className="p-4">
                  <span className="font-bold text-lg text-gray-800">Final Takeaway</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-[#064088] font-bold text-lg">Best value & proven results</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="text-red-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">No structure, no real progress</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-yellow-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Expensive, boring lessons, doesn't prepare you for university</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Mobile Comparison Cards - Visible only on mobile */}
        <div className="md:hidden mb-12">
          {/* Provider Cards */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            {/* INTERLINK Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#064088] p-4">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">INTERLINK</span>
                  <Check className="ml-2 text-green-100 w-5 h-5" />
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{row.feature}</h4>
                    <div className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.interlink}</span>
                    </div>
                  </div>
                ))}
                
                {/* Conclusion for INTERLINK */}
                <div className="p-4 bg-green-50">
                  <h4 className="font-semibold text-gray-800 mb-2">Final Takeaway</h4>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-[#064088] font-bold text-lg">Best value & proven results</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Free Programs Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-700 p-4">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">Free Programs</span>
                  <X className="ml-2 text-red-300 w-5 h-5" />
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{row.feature}</h4>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.freePrograms}</span>
                    </div>
                  </div>
                ))}
                
                {/* Conclusion for Free Programs */}
                <div className="p-4 bg-red-50">
                  <h4 className="font-semibold text-gray-800 mb-2">Final Takeaway</h4>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="text-red-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">No structure, no real sustainable progress</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Large Competitors Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-700 p-4">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">Large Competitors</span>
                  <DollarSign className="ml-2 text-yellow-300 w-5 h-5" />
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{row.feature}</h4>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.largeCompetitors}</span>
                    </div>
                  </div>
                ))}
                
                {/* Conclusion for Large Competitors */}
                <div className="p-4 bg-yellow-50">
                  <h4 className="font-semibold text-gray-800 mb-2">Final Takeaway</h4>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-yellow-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Solid, but expensive and not personalized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Alternative: Feature Accordion */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mt-8">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800">Compare by Feature</h3>
            </div>
            
            {comparisonData.map((row, index) => (
              <MobileAccordionItem 
                key={index}
                title={row.feature}
                isOpen={openItem === index}
                onClick={() => toggleItem(index)}
              >
                <div className="space-y-4">
                  {/* INTERLINK */}
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-[#064088]">INTERLINK</span>
                      <Check className="ml-2 text-green-500 w-4 h-4" />
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.interlink}</span>
                    </div>
                  </div>
                  
                  {/* Free Programs */}
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-gray-700">Free Programs</span>
                      <X className="ml-2 text-red-500 w-4 h-4" />
                    </div>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.freePrograms}</span>
                    </div>
                  </div>
                  
                  {/* Large Competitors */}
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-gray-700">Large Competitors</span>
                      <DollarSign className="ml-2 text-yellow-500 w-4 h-4" />
                    </div>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.largeCompetitors}</span>
                    </div>
                  </div>
                </div>
              </MobileAccordionItem>
            ))}
            
            {/* Final Takeaway Accordion Item */}
            <MobileAccordionItem 
              title="Final Takeaway"
              isOpen={openItem === comparisonData.length}
              onClick={() => toggleItem(comparisonData.length)}
            >
              <div className="space-y-4">
                {/* INTERLINK */}
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-[#064088]">INTERLINK</span>
                    <Check className="ml-2 text-green-500 w-4 h-4" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-[#064088] font-bold text-lg">Best value & proven results</span>
                  </div>
                </div>
                
                {/* Free Programs */}
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-gray-700">Free Programs</span>
                    <X className="ml-2 text-red-500 w-4 h-4" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="text-red-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">No structure, no real sustainable progress</span>
                  </div>
                </div>
                
                {/* Large Competitors */}
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-gray-700">Large Competitors</span>
                    <DollarSign className="ml-2 text-yellow-500 w-4 h-4" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-yellow-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Solid, but expensive and not personalized</span>
                  </div>
                </div>
              </div>
            </MobileAccordionItem>
          </div>
        </div>
        
        {/* Final Takeaway Section - Hidden as requested */}
        <div className="hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 mb-12"
          >
            <h3 className="text-2xl font-bold text-[#064088] mb-6">Final Takeaway</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* INTERLINK */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="text-green-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">INTERLINK</h4>
                  <p className="text-gray-700">Best value & proven results</p>
                </div>
              </div>
              
              {/* Free Programs */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-500 font-bold">⚠️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Free Programs</h4>
                  <p className="text-gray-700">No structure, no real progress</p>
                </div>
              </div>
              
              {/* Large Competitors */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <DollarSign className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Large Competitors</h4>
                  <p className="text-gray-700">Solid, but expensive and not personalized</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md">
                Choose INTERLINK
              </button>
            </div>
          </motion.div>
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center mt-10">
<a
  href="https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackApplicationClick("Comparison Table Section")}
  // 🔍 Opens external app form in new tab and ready for UTM tracking
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

export default ComparisonTableSection;
