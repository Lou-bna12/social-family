// ✅ src/components/UploadAvatar.js (version Cloudinary)
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import axios from 'axios';

const UploadAvatar = () => {
  const { updateUserProfile } = useUser();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'famnas_upload'); // ou le nom que tu as mis

    try {
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/duerbrhc2/image/upload',
        formData
      );
      const imageUrl = res.data.secure_url;

      // ✅ On met à jour Firestore avec la nouvelle URL
      await updateUserProfile({ photoURL: imageUrl });
      setImage(null);
    } catch (err) {
      console.error('Erreur envoi Cloudinary :', err);
      setError("Une erreur s'est produite pendant l'envoi.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">
        Changer la photo de profil
      </label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handleUpload}
        disabled={uploading || !image}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"
      >
        {uploading ? 'Envoi en cours...' : 'Téléverser'}
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default UploadAvatar;
