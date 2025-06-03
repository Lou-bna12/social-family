import React from 'react';

const MemberCard = ({ name, role, avatar, onDelete }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md text-center max-w-[150px] relative">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border border-gray-300 shadow-sm"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>

      {/* Bouton Supprimer */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full px-2 py-1 text-xs"
        title="Supprimer"
      >
        🗑
      </button>
    </div>
  );
};

export default MemberCard;
