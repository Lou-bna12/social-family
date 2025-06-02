import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import '../styles/Hero.css';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <div className="py-10">
        <Features />
      </div>
    </div>
  );
};

export default Home;
