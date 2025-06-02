// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCS1eYun6cDYO_6LAfdRNWiBL6t5E6l2Ls',
  authDomain: 'famnas-c89ce.firebaseapp.com',
  projectId: 'famnas-c89ce',
  storageBucket: 'famnas-c89ce.firebasestorage.app',
  messagingSenderId: '750744958470',
  appId: '1:750744958470:web:e96cddfd7ee2873bb93587',
  measurementId: 'G-XEG2B4E46Q',
};
// ✅ Initialiser l'app Firebase
const app = initializeApp(firebaseConfig);

// ✅ Exporter auth et firestore correctement
export const auth = getAuth(app);
export const db = getFirestore(app);
