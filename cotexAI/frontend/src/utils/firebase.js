// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-d1782.firebaseapp.com",
  projectId: "cortexai-d1782",
  storageBucket: "cortexai-d1782.firebasestorage.app",
  messagingSenderId: "249037212587",
  appId: "1:249037212587:web:5a35dcbaf2afa55edde0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()