import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const Signup = () => {
  const { registerUser } = useUser();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'parent', // parent ou enfant
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f9fa] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-[#8d6441]">
          Créer un compte
        </h2>

        <div>
          <label className="block text-sm font-medium">Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Mot de passe</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
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

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          S’inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;
