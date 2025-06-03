// src/context/TaskContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { useUser } from './UserContext';

export const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    console.log('👤 Utilisateur connecté :', user);

    if (!user || !user.uid) {
      console.warn('⚠️ Aucun utilisateur ou UID manquant');
      return;
    }

    const q = query(
      collection(db, 'tasks'),
      where('uid', '==', user.uid),
      orderBy('timestamp', 'desc')
    );

    console.log('📡 Requête Firestore lancée pour UID :', user.uid);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log('📥 Snapshot reçu :', snapshot.docs.length, 'documents');

      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log('✅ Tâches chargées :', taskList);
      setTasks(taskList);
    });

    return () => unsubscribe();
  }, [user]);

  const addTask = async ({ title }) => {
    if (!user || !user.uid) {
      console.warn(
        "⛔ Impossible d'ajouter une tâche sans utilisateur connecté"
      );
      return;
    }

    const task = {
      title,
      status: 'en cours',
      author: user.name,
      uid: user.uid,
      timestamp: serverTimestamp(),
    };

    await addDoc(collection(db, 'tasks'), task);
    console.log('✅ Tâche ajoutée :', task);
  };

  const updateTask = async (id) => {
    if (!id || typeof id !== 'string') {
      console.error('❌ ID de tâche invalide :', id);
      return;
    }

    await updateDoc(doc(db, 'tasks', id), {
      status: 'terminé',
    });

    console.log('📝 Tâche marquée comme terminée :', id);
  };

  const deleteTask = async (id) => {
    if (!id || typeof id !== 'string') {
      console.error('❌ ID de tâche invalide :', id);
      return;
    }

    await deleteDoc(doc(db, 'tasks', id));
    console.log('🗑️ Tâche supprimée :', id);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
