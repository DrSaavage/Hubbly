// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDmmprczzSXqye5ZYMTTzffY6ysTGyY9pQ",
  authDomain: "hubbly-2c970.firebaseapp.com",
  projectId: "hubbly-2c970",
  storageBucket: "hubbly-2c970.appspot.com",
  messagingSenderId: "1014408126337",
  appId: "1:1014408126337:web:991edcd5017ed8b9d25280"
};

// Empêche l'erreur "Firebase App named '[DEFAULT]' already exists"
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ⚠️ Important : initializeAuth ne peut être appelé qu'une seule fois
let auth;
try {
  auth = getAuth(app);
} catch (e) {
  // fallback si getAuth échoue
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth };
