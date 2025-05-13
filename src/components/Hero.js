import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="text-2xl font-bold mb-4">
          Restez connectés avec votre famille
        </h2>
        <Link
          to="/signup"
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded"
        >
          Créer un compte
        </Link>
      </div>
    </section>
  );
};

export default Hero;
