// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4gBH2YltBgyqIzsrHrKPRdSaGOmjaUU",
  authDomain: "netflixgpt-ad17c.firebaseapp.com",
  projectId: "netflixgpt-ad17c",
  storageBucket: "netflixgpt-ad17c.firebasestorage.app",
  messagingSenderId: "683710948748",
  appId: "1:683710948748:web:d9b04240e45565d2d8a2a9",
  measurementId: "G-KQ0PPVKV1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);