import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GuideTeachesSection from '../components/GuideTeachesSection';
import IsRightForYouSectionLanding from '../components/IsRightForYouSectionLanding';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GuideTeachesSection />
      <TestimonialsSection />
      <IsRightForYouSectionLanding />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;
