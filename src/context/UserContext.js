// ✅ src/context/UserContext.js
import React, { createContext, useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

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
        uid: userCredential.user.uid,
        name,
        email,
        role,
      };

      await setDoc(doc(db, 'users', newUser.uid), newUser);
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
      const uid = userCredential.user.uid;
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/dashboard');
      } else {
        alert('Erreur : utilisateur introuvable.');
      }
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

  const updateUserProfile = async (updates) => {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, { ...user, ...updates }, { merge: true });

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <UserContext.Provider
      value={{ user, registerUser, loginUser, logoutUser, updateUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
