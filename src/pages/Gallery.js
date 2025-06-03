import React, { useEffect, useState } from 'react';
import PhotoCard from '../components/PhotoCard';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';

// 👪 Liste des membres
const memberList = [
  { name: 'Loubna', role: 'Maman' },
  { name: 'Ahcene', role: 'Papa' },
  { name: 'Élyne', role: 'Fille' },
  { name: 'Sohan', role: 'Fils' },
  { name: 'Junaïd', role: 'Bébé' },
];

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const [newPhoto, setNewPhoto] = useState({
    file: null,
    caption: '',
    author: '',
  });

  // 🔄 Récupérer les photos à l'ouverture
  useEffect(() => {
    const fetchPhotos = async () => {
      const snapshot = await getDocs(collection(db, 'photos'));
      const fetchedPhotos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPhotos(fetchedPhotos);
    };

    fetchPhotos();
  }, []);

  // 📤 Sélection de fichier
  const handleFileChange = (e) => {
    setNewPhoto({ ...newPhoto, file: e.target.files[0] });
  };

  // ➕ Ajouter une photo
  const handleAddPhoto = async (e) => {
    e.preventDefault();
    if (!newPhoto.file || !newPhoto.author) return;

    const formData = new FormData();
    formData.append('file', newPhoto.file);
    formData.append('upload_preset', 'ml_default'); // ← Ton preset Cloudinary
    formData.append('folder', 'mur');

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
        createdAt: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, 'photos'), newPhotoObject);
      setPhotos([{ id: docRef.id, ...newPhotoObject }, ...photos]);
      setNewPhoto({ file: null, caption: '', author: '' });
    } catch (err) {
      console.error('Erreur Cloudinary :', err);
    }
  };

  // 🗑 Supprimer une photo
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'photos', id));
    setPhotos(photos.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">📷 Mur de photos</h2>

      {/* 🔍 Barre de recherche */}
      <div className="max-w-md mx-auto mb-4">
        <input
          type="text"
          placeholder="🔍 Rechercher une photo (auteur ou légende)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* ➕ Formulaire d'ajout */}
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
        <select
          value={newPhoto.author}
          onChange={(e) => setNewPhoto({ ...newPhoto, author: e.target.value })}
          className="w-full p-2 border rounded bg-white"
          required
        >
          <option value="">Sélectionner un membre</option>
          {memberList.map((member, index) => (
            <option key={index} value={member.name}>
              {member.name} ({member.role})
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-[#a9825c] hover:bg-[#926d49] text-white font-semibold py-2 rounded"
        >
          Ajouter la photo
        </button>
      </form>

      {/* 🖼️ Affichage filtré des photos */}
      <div className="flex flex-wrap gap-4 justify-center">
        {photos
          .filter(
            (p) =>
              p.caption?.toLowerCase().includes(search.toLowerCase()) ||
              p.author?.toLowerCase().includes(search.toLowerCase())
          )
          .map((photo) => (
            <PhotoCard
              key={photo.id}
              {...photo}
              onDelete={() => handleDelete(photo.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
