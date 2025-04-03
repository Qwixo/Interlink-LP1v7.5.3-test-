import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { FaHandshake, FaChevronDown } from 'react-icons/fa';
import HowInterlinkHelpsSection from '../components/HowInterlinkHelpsSection';
import SpeakingEnglishPaysOffSection from '../components/SpeakingEnglishPaysOffSection';
import ComparisonTableSection from '../components/ComparisonTableSection';
import StudyOptionsSection from '../components/StudyOptionsSection';
import TimelineSection from '../components/TimelineSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OnTheFenceSection from '../components/OnTheFenceSection';
import IsRightForYouSection from '../components/IsRightForYouSection';
import FAQSection from '../components/FAQSection';
import LastCTASection from '../components/LastCTASection';
import StudentJourneyComparisonSection from '../components/StudentJourneyComparisonSection';
import ScrollToTop from '../components/ScrollToTop';
import CleanJourneyTimeline from "../components/CleanJourneyTimeline";
import TransitionToInterlinkSection from '../components/TransitionToInterlinkSection';
import StudentLifeSection from '../components/StudentLifeSection';
import { LandingHero } from '../components/LandingHero';

const StartPage = () => {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);

  const toggleGuideExpansion = () => {
    setIsGuideExpanded(!isGuideExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />

      {/* NEW HERO SECTION - Added at the absolute top with more spacing */}
      <LandingHero />
      
      {/* Added extra spacing to separate from the hero section */}
      <div className="h-16 md:h-24"></div>

      {/* REPLACED SECTION: Start pursuing your goals with INTERLINK! */}
      <HowInterlinkHelpsSection />
      
      {/* REPLACED: Speaking English Pays Off with Student Journey Comparison */}
      <StudentJourneyComparisonSection />
      
      {/* UPDATED SECTION: Comparison Table */}
      <ComparisonTableSection />
      
      {/* UPDATED SECTION: Study Options */}
      <StudyOptionsSection />
      
      {/* CleanJourneyTimeline */}
      <CleanJourneyTimeline />

      {/* NEW SECTION: Timeline - What happens after you apply */}
      <TimelineSection />
      
      {/* NEW SECTION: Testimonials - Not touching as requested */}
      <TestimonialsSection />
      
      {/* NEW SECTION: Student Life Section - Added between Testimonials and On The Fence */}
      <StudentLifeSection />
      
      {/* NEW SECTION: On The Fence */}
      <OnTheFenceSection />
      
      {/* NEW SECTION: Is Right For You - Commented out as requested */}
      {/* <IsRightForYouSection /> */}
      
      {/* NEW SECTION: FAQ */}
      <FAQSection />
      
      {/* FINAL CTA SECTION - Updated */}
      <LastCTASection />
      
      <Footer />
    </div>
  );
};

export default StartPage;
