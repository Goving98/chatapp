// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-32b8f.firebaseapp.com",
  projectId: "chatapp-32b8f",
  storageBucket: "chatapp-32b8f.appspot.com",
  messagingSenderId: "970099742363",
  appId: "1:970099742363:web:4f11e5e072d64e9900983e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()