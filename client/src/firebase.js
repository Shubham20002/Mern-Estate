// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c209b.firebaseapp.com",
  projectId: "mern-estate-c209b",
  storageBucket: "mern-estate-c209b.firebasestorage.app",
  messagingSenderId: "507651501361",
  appId: "1:507651501361:web:b8fbbc71d03730e7301410"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);