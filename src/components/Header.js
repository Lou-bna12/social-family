import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-beige-500 to-beige-700 p-4 shadow-lg flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="text-white font-bold text-xl flex items-center space-x-2 hover:text-orange-500"
      >
        <HomeIcon className="h-6 w-6 mr-2" />
        <span>FamNas</span>
      </Link>

      {/* Nav Links */}
      <nav className="space-x-6">
        <Link
          to="/tasks"
          className="text-white hover:text-orange-500 flex items-center space-x-1"
        >
          <ClipboardDocumentCheckIcon className="h-5 w-5" />
          <span>Tâches</span>
        </Link>

        {!user ? (
          <>
            <Link to="/login" className="text-white hover:text-orange-500">
              Connexion
            </Link>
            <Link to="/signup" className="text-white hover:text-orange-500">
              Inscription
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              logoutUser();
              navigate('/login');
            }}
            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
          >
            Déconnexion
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
