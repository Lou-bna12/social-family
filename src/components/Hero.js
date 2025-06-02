// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import familyImage from '../assets/family.png';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      <img
        src={familyImage}
        alt="Famille"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow">
          Restez connectés avec votre famille
        </h1>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg shadow-lg"
          onClick={() => navigate('/signup')}
        >
          Créer un compte
        </button>
      </div>
    </section>
  );
};

export default Hero;
