import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
