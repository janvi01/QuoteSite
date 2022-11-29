// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvKtiR86yTJW7LQNeiEjmZ2NlZgy39C6Y",
  authDomain: "quotesite-e4212.firebaseapp.com",
  projectId: "quotesite-e4212",
  storageBucket: "quotesite-e4212.appspot.com",
  messagingSenderId: "665697583566",
  appId: "1:665697583566:web:68adf935a6f52d3561eb9f",
  measurementId: "G-383ERSG1HX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
