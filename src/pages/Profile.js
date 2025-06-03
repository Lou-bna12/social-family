import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import QuickNav from '../components/QuickNav';
import UploadAvatar from '../components/UploadAvatar';

const Profile = () => {
  const { user } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    role: user?.role || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Infos mises à jour :', form);
    setEditMode(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <QuickNav />
      <h1 className="text-2xl font-bold text-[#8d6441] mb-6">Mon Profil</h1>

      {/* ✅ Affichage de la photo de profil */}
      {user?.photoURL && (
        <div className="flex justify-center mb-4">
          <img
            src={user.photoURL}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover border-2 border-orange-400"
          />
        </div>
      )}

      {/* ✅ Upload de nouvelle photo */}
      <UploadAvatar />

      {!editMode ? (
        <div className="bg-white shadow-md rounded p-6 space-y-4 mt-4">
          <p>
            <strong>Nom :</strong> {user?.name}
          </p>
          <p>
            <strong>Email :</strong> {user?.email}
          </p>
          <p>
            <strong>Rôle :</strong> {user?.role}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"
          >
            Modifier mes infos
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSave}
          className="bg-white shadow-md rounded p-6 space-y-4 mt-4"
        >
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Rôle</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
            >
              <option value="papa">Papa</option>
              <option value="maman">Maman</option>
              <option value="enfant">Enfant</option>
            </select>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Sauvegarder
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Annuler
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Envie de lire ou d’écrire un message ?
        </p>
        <Link
          to="/messages"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 inline-block mt-2"
        >
          Voir le mur familial
        </Link>
      </div>
    </div>
  );
};

export default Profile;
