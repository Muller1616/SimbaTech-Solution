import React from 'react';
import HeroSection from '../sections/HeroSection';
import TrustSection from '../sections/TrustSection';
import ServicesBento from '../sections/ServicesBento';
import ProcessTimeline from '../sections/ProcessTimeline';
import Testimonials from '../sections/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustSection />
      <ServicesBento />
      <ProcessTimeline />
      <Testimonials />
    </div>
  );
};

export default Home;
