import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import { useUser } from './UserContext';

export const MessagesContext = createContext();
export const useMessages = () => useContext(MessagesContext);

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const { user } = useUser();

  // 🔁 Charger en temps réel
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  // ➕ Ajouter un message
  const addMessage = async (text, author) => {
    if (!user) return;
    await addDoc(collection(db, 'messages'), {
      text,
      author,
      uid: user.uid,
      timestamp: serverTimestamp(),
    });
  };

  // ❌ Supprimer un message
  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, 'messages', id));
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage, deleteMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};
