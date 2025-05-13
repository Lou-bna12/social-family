import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8D6441] via-[#A9825C] to-[#C3A57B] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:items-center">
        {/* Navigation verticale */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-orange-400"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Accueil</span>
          </Link>

          <Link
            to="/signup"
            className="flex items-center space-x-2 hover:text-orange-400"
          >
            <UserPlusIcon className="w-5 h-5" />
            <span>Inscription</span>
          </Link>

          <Link
            to="/login"
            className="flex items-center space-x-2 hover:text-orange-400"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span>Connexion</span>
          </Link>
        </div>

        {/* Informations supplémentaires */}
        <div className="text-center text-sm">
          <p>
            Créé par <span className="font-bold">Loubna Sellam</span>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} FamNas. Tous droits réservés.
          </p>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex space-x-4">
          <a href="javascript:void(0)" className="hover:text-blue-500">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="javascript:void(0)" className="hover:text-pink-500">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="javascript:void(0)" className="hover:text-blue-400">
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
