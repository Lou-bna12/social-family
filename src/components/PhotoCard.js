import React from 'react';

const PhotoCard = ({ url, caption, author, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-2 w-[180px] text-center relative">
      <img
        src={url}
        alt={caption}
        className="rounded-md object-cover h-40 w-full mb-2"
      />
      {caption && <p className="text-sm font-semibold">{caption}</p>}
      {author && <p className="text-xs text-gray-500">📸 {author}</p>}

      {/* Bouton Supprimer */}
      <button
        onClick={onDelete}
        title="Supprimer cette photo"
        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600"
      >
        🗑
      </button>
    </div>
  );
};

export default PhotoCard;
