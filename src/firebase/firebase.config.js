// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN6nnjaBgHfKauiaiBZkJjcY441cfulnM",
  authDomain: "game-hub-f24cb.firebaseapp.com",
  projectId: "game-hub-f24cb",
  storageBucket: "game-hub-f24cb.firebasestorage.app",
  messagingSenderId: "777601503203",
  appId: "1:777601503203:web:d5296d54363a9d9eafdad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
