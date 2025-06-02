import React from 'react';
import { useNavigate } from 'react-router-dom';
import familyImage from '../assets/family.png';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${familyImage})`,
        backgroundPosition: 'center top',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl font-bold mb-4">
          Restez connectés avec votre famille
        </h1>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          onClick={() => navigate('/signup')}
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
};

export default Hero;
