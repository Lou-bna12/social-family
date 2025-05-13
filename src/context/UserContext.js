import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Inscription
  const registerUser = (userData) => {
    setUser(userData);
    navigate('/dashboard');
  };

  // Connexion
  const loginUser = (email, password) => {
    console.log('Connexion réussie :', email, password);

    const fakeUserData = {
      name: 'Loubna Sellam',
      email,
      role: 'Maman', // Rôle mis à jour ici
    };

    setUser(fakeUserData);
    navigate('/dashboard');
  };

  // Déconnexion
  const logoutUser = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
