import React from 'react';
import HeroSection from './components/HeroSection';
import UrgencySection from './components/UrgencySection';
import TestimonialSection from './components/TestimonialSection';
import OfferBreakdownSection from './components/OfferBreakdownSection';
import CoachingDifferenceSection from './components/CoachingDifferenceSection';
import ApplyFormSection from './components/ApplyFormSection';
import FAQSection from './components/FAQSection';
import FinalReminderSection from './components/FinalReminderSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <main className="font-sans bg-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Other sections will go below this */}
      <UrgencySection />
      <TestimonialSection />
      <OfferBreakdownSection />
      <CoachingDifferenceSection />
      <ApplyFormSection />
      <FAQSection />
      <FinalReminderSection />
      <FooterSection />
    </main>
  );
}

export default App;
