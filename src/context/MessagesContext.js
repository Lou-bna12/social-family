// ✅ src/context/MessagesContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useUser } from './UserContext';

export const MessagesContext = createContext();
export const useMessages = () => useContext(MessagesContext);

export const MessagesProvider = ({ children }) => {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);

  // Écoute en temps réel des messages
  useEffect(() => {
    if (!user || !user.uid) return;

    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgList);
    });

    return () => unsubscribe();
  }, [user]);

  // Fonction pour envoyer un message + notif
  const sendMessage = async (text) => {
    if (!user || !user.uid || !user.name) {
      console.warn('⛔ Utilisateur invalide', user);
      return;
    }

    // 1. Envoyer le message
    await addDoc(collection(db, 'messages'), {
      text,
      author: user.name,
      uid: user.uid,
      timestamp: serverTimestamp(),
    });

    // 2. Créer une notification pour les autres
    await addDoc(collection(db, 'notifications'), {
      text: `${user.name} a posté un message`,
      uid: user.uid,
      timestamp: serverTimestamp(),
    });
  };

  // Supprimer un message
  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, 'messages', id));
  };

  return (
    <MessagesContext.Provider value={{ messages, sendMessage, deleteMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};
