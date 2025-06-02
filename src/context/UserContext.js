import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const registerUser = async ({ name, email, password, role }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = {
        uid: userCredential.user.uid, // ✅ Important : on stocke le vrai UID
        name,
        email,
        role,
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('/dashboard');
    } catch (error) {
      alert('Erreur inscription : ' + error.message);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = {
        uid: userCredential.user.uid, // ✅ Important ici aussi
        email,
        name: 'FamNas User',
        role: 'membre',
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/dashboard');
    } catch (error) {
      alert('Erreur connexion : ' + error.message);
    }
  };

  const logoutUser = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
