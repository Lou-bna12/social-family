import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#C3A57B] via-[#A9825C] to-[#8D6441] bg-opacity-90 backdrop-blur-md py-4 px-6 fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Accueil */}
        <Link
          to="/"
          className="text-white font-bold text-lg hover:text-orange-400 flex items-center space-x-2"
        >
          <HomeIcon className="w-6 h-6" />
          <span>FamNas</span>
        </Link>

        {/* Liens */}
        <div className="flex space-x-6">
          <Link
            to="/login"
            className="text-white hover:text-orange-400 flex items-center space-x-2"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span>Connexion</span>
          </Link>

          <Link
            to="/signup"
            className="text-white hover:text-orange-400 flex items-center space-x-2"
          >
            <UserPlusIcon className="w-5 h-5" />
            <span>Inscription</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
