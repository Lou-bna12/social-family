import React, { useState } from 'react';
import PhotoCard from '../components/PhotoCard';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState({
    file: null,
    caption: '',
    author: '',
  });

  const handleFileChange = (e) => {
    setNewPhoto({ ...newPhoto, file: e.target.files[0] });
  };

  const handleAddPhoto = async (e) => {
    e.preventDefault();
    if (!newPhoto.file) return;

    const formData = new FormData();
    formData.append('file', newPhoto.file);
    formData.append('upload_preset', 'ml_default'); // 👈 à adapter si tu as un autre preset
    formData.append('folder', 'mur'); // Tu peux mettre un dossier ex: "mur"

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/duerbrhc2/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();

      const newPhotoObject = {
        url: data.secure_url,
        caption: newPhoto.caption,
        author: newPhoto.author,
      };

      setPhotos([newPhotoObject, ...photos]);
      setNewPhoto({ file: null, caption: '', author: '' });
    } catch (err) {
      console.error('Erreur upload :', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">📷 Mur de photos</h2>

      <form
        onSubmit={handleAddPhoto}
        className="max-w-md mx-auto mb-6 bg-white p-4 rounded-lg shadow space-y-3"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border rounded bg-white"
          required
        />
        <input
          type="text"
          placeholder="Légende (facultatif)"
          value={newPhoto.caption}
          onChange={(e) =>
            setNewPhoto({ ...newPhoto, caption: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Auteur / membre"
          value={newPhoto.author}
          onChange={(e) => setNewPhoto({ ...newPhoto, author: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#a9825c] hover:bg-[#926d49] text-white font-semibold py-2 rounded"
        >
          Ajouter la photo
        </button>
      </form>

      <div className="flex flex-wrap gap-4 justify-center">
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            {...photo}
            onDelete={() => {
              const updated = [...photos];
              updated.splice(index, 1);
              setPhotos(updated);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
