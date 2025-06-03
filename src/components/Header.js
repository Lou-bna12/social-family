// src/components/Header.js
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
    <header className="bg-gradient-to-r from-[#c3a57b] to-[#a9825c] p-4 shadow-lg flex justify-between items-center">
      <Link
        to="/"
        className="text-white font-bold text-xl flex items-center hover:text-orange-400"
      >
        <HomeIcon className="h-6 w-6 mr-2" />
        FamNas
      </Link>

      <nav className="flex items-center gap-6 text-white">
        {user && (
          <>
            <Link
              to="/profile"
              className="hover:text-orange-400 flex items-center gap-1"
            >
              <span>👤 Profil</span>
            </Link>

            <Link
              to="/tasks"
              className="hover:text-orange-400 flex items-center gap-1"
            >
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
              <span>Tâches</span>
            </Link>

            <Link
              to="/famille"
              className="hover:text-orange-400 flex items-center gap-1"
            >
              <span>👨‍👩‍👧‍👦 Famille</span>
            </Link>
          </>
        )}

        {!user ? (
          <>
            <Link to="/login" className="hover:text-orange-400">
              Connexion
            </Link>
            <Link to="/signup" className="hover:text-orange-400">
              Inscription
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              logoutUser();
              navigate('/login');
            }}
            className="bg-red-500 px-4 py-1 rounded text-white hover:bg-red-600"
          >
            Déconnexion
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
