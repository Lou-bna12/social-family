import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Signup = () => {
  const { registerUser } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Créer l'objet utilisateur
    const newUser = {
      name,
      email,
      role,
    };

    // Enregistrer l'utilisateur
    registerUser(newUser);

    // Réinitialiser le formulaire
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom */}
          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Rôle */}
          <div>
            <label className="block text-gray-700">Rôle</label>
            <select
              className="w-full p-2 border rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Choisissez un rôle</option>
              <option value="Papa">Papa</option>
              <option value="Maman">Maman</option>
              <option value="Enfant">Enfant</option>
            </select>
          </div>

          {/* Bouton S'inscrire */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
