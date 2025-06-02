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
} from 'firebase/firestore';
import { useUser } from './UserContext';

export const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'tasks'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskList);
    });

    return () => unsubscribe();
  }, [user]);

  const addTask = async ({ title }) => {
    if (!user) return;

    await addDoc(collection(db, 'tasks'), {
      title,
      status: 'en cours',
      author: user.name,
      uid: user.uid,
      timestamp: serverTimestamp(),
    });
  };

  const updateTask = async (id) => {
    await updateDoc(doc(db, 'tasks', id), {
      status: 'terminé',
    });
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
