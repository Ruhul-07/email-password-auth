// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Do not share config in public 
const firebaseConfig = {
  apiKey: "AIzaSyCbEvT0LraKMyiCTvXk60Tt85jm423AlNE",
  authDomain: "email-password-auth-eea9b.firebaseapp.com",
  projectId: "email-password-auth-eea9b",
  storageBucket: "email-password-auth-eea9b.firebasestorage.app",
  messagingSenderId: "730277651506",
  appId: "1:730277651506:web:0adb4d4cc498a3bc99482b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);