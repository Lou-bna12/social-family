import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8D6441] to-[#C3A57B] text-white py-6">
      <div className="flex flex-col items-center justify-center">
        {/* Réseaux Sociaux */}
        <div className="flex space-x-4">
          <FaFacebook className="w-5 h-5 cursor-pointer hover:text-[#E76F51]" />
          <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#E76F51]" />
          <FaTwitter className="w-5 h-5 cursor-pointer hover:text-[#E76F51]" />
        </div>

        {/* Créé par */}
        <div className="text-center text-xs md:text-sm">
          © {new Date().getFullYear()} FamNas - Créé par Loubna Sellam.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
