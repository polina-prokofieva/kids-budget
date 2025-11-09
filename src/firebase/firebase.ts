import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoRl2ZUbpe9rtVi9SEbeOnhzvO-8MkYfw",
  authDomain: "kids-budget-5dda8.firebaseapp.com",
  projectId: "kids-budget-5dda8",
  storageBucket: "kids-budget-5dda8.firebasestorage.app",
  messagingSenderId: "75622287389",
  appId: "1:75622287389:web:9772ea42e84914b6b89ef4",
  measurementId: "G-49B4L9SW3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
