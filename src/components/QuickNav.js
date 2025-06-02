// src/components/QuickNav.js
import React from 'react';
import { Link } from 'react-router-dom';

const QuickNav = () => {
  return (
    <nav className="flex justify-center gap-4 mb-6">
      <Link
        to="/profile"
        className="text-[#8d6441] font-medium hover:underline"
      >
        👤 Profil
      </Link>
      <Link to="/tasks" className="text-[#8d6441] font-medium hover:underline">
        📝 Tâches
      </Link>
      <Link
        to="/messages"
        className="text-[#8d6441] font-medium hover:underline"
      >
        💬 Messages
      </Link>
    </nav>
  );
};

export default QuickNav;
